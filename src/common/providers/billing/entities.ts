import { PlanInfos } from './interfaces';
import { PlanId, PlanName } from './types';

/**
 * Names convention for each plan ID
 *
 * Representation : Front, CF
 */
// Circular Depency
export const PlanNameConvention: { [key in PlanId]: PlanName } = {
  free: 'Free',
  starter: 'Starter',
  starter_AI: 'Starter AI',
  professional: 'Professional'
};

/**
 * Addons used in a specific bot
 *
 * Type : DB model (bots/{botId}/billing/addons)
 * Representation : Front, CF
 */
export class BotBillingAddons {
  public contributor: number;
  public additional_users: number;
  public support: number;
  public white_label: boolean;

  constructor(addons: Partial<BotBillingAddons>) {
    this.contributor = addons.contributor || 0;
    this.additional_users = addons.additional_users || 0;
    this.support = addons.support || 0;
    this.white_label = addons.white_label || false;
  }
}

/**
 * Model of options of a plan
 *
 * Type : DB model (bots/{botId}/billing/options)
 * Representation : Front, CF
 */
export class BotBillingOptions {
  public deployments: number;
  public users: number;
  public nlp: number;
  public api_storages: number;
  public sso_connection: boolean;
  public stripe_connection: boolean;
  public analytics_access: boolean;
  public support_access: boolean;
  public broadcast_access: boolean;

  constructor(options: Partial<BotBillingOptions>) {
    this.deployments = options.deployments || 0;
    this.users = options.users || 0;
    this.nlp = options.nlp || 0;
    this.api_storages = options.api_storages || 0;
    this.sso_connection = options.sso_connection || false;
    this.stripe_connection = options.stripe_connection || false;
    this.analytics_access = options.analytics_access || false;
    this.support_access = options.support_access || false;
    this.broadcast_access = options.broadcast_access || false;
  }

  /**
   * Update a specific option value
   *
   * Called in : Front, CF
   *
   * @param option - target option to update
   * @param value - new value of target option
   */
  public updateOption(option: keyof BotBillingOptions, value: number | boolean) {
    if (typeof this[option] !== typeof value) return;

    switch (option) {
      case 'deployments':
        this.deployments = this.deployments + (value as number) >= 0 ? this.deployments + (value as number) : 0;
        break;
      case 'users':
        this.users = this.users + (value as number) >= 0 ? this.users + (value as number) : 0;
        break;
      case 'nlp':
        this.nlp = this.nlp + (value as number) >= 0 ? this.nlp + (value as number) : 0;
        break;
      case 'api_storages':
        this.api_storages = this.api_storages + (value as number) >= 0 ? this.api_storages + (value as number) : 0;
        break;
      case 'sso_connection':
        this.sso_connection = value as boolean;
        break;
      case 'stripe_connection':
        this.stripe_connection = value as boolean;
        break;
      case 'analytics_access':
        this.analytics_access = value as boolean;
        break;
      case 'support_access':
        this.support_access = value as boolean;
        break;
      case 'broadcast_access':
        this.broadcast_access = value as boolean;
        break;
    }
  }
}

/**
 * Complete model of billing infos in bot
 * including BotBillingOptions, BotBillingAddons, and other infos
 * such as subscription date
 *
 * Type : DB model (bots/{botId}/billing)
 * Representation : Front, CF
 */
export class BotBilling {
  public activePlan: PlanId;
  public plan_period_start: number;
  public plans: { [plan in PlanId]?: PlanInfos };
  public options: BotBillingOptions;
  public addons: BotBillingAddons;
  public enable_downgrade: 'none' | 'no_free' | 'all';

  constructor(infos: Partial<BotBilling>) {
    this.activePlan = infos.activePlan || 'free';
    this.plan_period_start = Date.now();
    this.plans = infos.plans || {};
    this.options = new BotBillingOptions(infos.options || {});
    this.addons = new BotBillingAddons(infos.addons || {});
    this.enable_downgrade = infos.enable_downgrade || 'none';
  }

  /**
   * Switch from a plan to another in a bot
   *
   * Called in : CF
   *
   * @param previous - previous plan
   * @param current - target plan
   */
  public switchPlan(previous: PlanId, current: PlanId): Promise<void> {
    return new Promise((resolve) => {
      this.registerPlanDefaults(previous);
      this.registerPlanDefaults(current);

      const previousPlan = this.plans[previous];
      const currentPlan = this.plans[current];

      previousPlan.periods.push({
        start: this.plan_period_start,
        end: Date.now()
      });
      previousPlan.active_trial = false;
      previousPlan.expired_trial = true; // cannot try this plan again

      this.activePlan = current;
      this.plan_period_start = Date.now();
      // activate trial if not already expired
      currentPlan.active_trial = !currentPlan.expired_trial;

      resolve();
    });
  }

  /**
   * Set default plan subscription infos for a newly subscribed plan
   *
   * Called in : CF
   *
   * @param planId - plan for which to register defaults
   */
  private registerPlanDefaults(planId: PlanId): void {
    this.plans[planId] = this.plans[planId] || {};
    this.plans[planId].active_trial = this.plans[planId].active_trial || null;
    this.plans[planId].expired_trial = this.plans[planId].expired_trial || null;
    this.plans[planId].id = this.plans[planId].id || planId;
    this.plans[planId].name = this.plans[planId].name || PlanNameConvention[planId];
    this.plans[planId].periods = this.plans[planId].periods || [];
  }
}

/**
 * Complete model of a plan
 * Used to handle plans computation in the app
 *
 * Type : app model
 * Representation : Front, CF
 */
export class BillingPlan extends BotBillingOptions {
  public name: PlanName;
  public id: PlanId;
  public outperforms: PlanId[];
  public is_free_plan: boolean;
  public rate: number;

  constructor(plan: Partial<BillingPlan>) {
    super(plan);
    this.id = plan.id || 'free';
    this.name = plan.name || PlanNameConvention[this.id];
    this.outperforms = plan.outperforms || [];
    this.is_free_plan = plan.is_free_plan || false;
    this.rate = plan.rate || 0;
  }

  /**
   * Test if a passed plan outperforms the current one
   * e.g. if the user has enabled a setting inducing a plan upgrade
   *
   * Called in : Front, CF
   *
   * @param previous - previous active plan to check if we compare the same
   * @param enable_downgrade - enable a plan downgrade if the compared plan is below the current one
   *
   * @returns - TRUE if the compared plan outperforms the current one
   */
  public isReplacing(previous: PlanId, enable_downgrade?: boolean): boolean {
    return previous !== this.id && (enable_downgrade || this.outperforms.indexOf(previous) > -1);
  }

  /**
   * Compare some options with the current ones
   *
   * Called in : Front, CF
   *
   * @param options - options to compare
   * @param skip_free - skip comparison is current plan is 'free'
   *
   * @returns - TRUE if the passed options are greater than the current ones
   */
  public compare(options: BotBillingOptions, skip_free?: boolean): boolean {
    if (this.is_free_plan && skip_free) {
      return false;
    }
    return !(
      options.deployments > this.deployments ||
      options.users > this.users ||
      options.nlp > this.nlp ||
      options.api_storages > this.api_storages ||
      (options.sso_connection && !this.sso_connection) ||
      (options.stripe_connection && !this.stripe_connection) ||
      (options.analytics_access && !this.analytics_access) ||
      (options.support_access && !this.support_access) ||
      (options.broadcast_access && !this.broadcast_access)
    );
  }
}
