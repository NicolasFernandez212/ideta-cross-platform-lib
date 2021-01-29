import { PlanInfos } from './interfaces';
import { PlanId, PlanName } from './types';

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

  /*
   * returns TRUE if the compared plan can replace the current one
   */
  public isReplacing(previous: PlanId, enable_downgrade?: boolean): boolean {
    return previous !== this.id && (enable_downgrade || this.outperforms.indexOf(previous) > -1);
  }

  /*
   * returns TRUE if the compared plan is matches the current instance
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

  // Not used in Front
  public switchPlan(previous: PlanId, current: PlanId): Promise<void> {
    return new Promise((resolve) => {
      this.registerPlanDefaults(previous);
      this.registerPlanDefaults(current);

      const previousPlan = this.plans[previous];
      const currentPlan = this.plans[current];

      previousPlan.periods.push({
        start: this.plan_period_start,
        end: Date.now(),
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

  // Not used in Front
  private registerPlanDefaults(planId: PlanId): void {
    this.plans[planId] = this.plans[planId] || {};
    this.plans[planId].active_trial = this.plans[planId].active_trial || null;
    this.plans[planId].expired_trial = this.plans[planId].expired_trial || null;
    this.plans[planId].id = this.plans[planId].id || planId;
    this.plans[planId].name = this.plans[planId].name || PlanNameConvention[planId];
    this.plans[planId].periods = this.plans[planId].periods || [];
  }
}

// C - D
export const PlanNameConvention: { [key in PlanId]: PlanName } = {
  free: 'Free',
  starter: 'Starter',
  starter_AI: 'Starter AI',
  professional: 'Professional',
};
