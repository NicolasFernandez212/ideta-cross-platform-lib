import { PlanInfos } from './interfaces';
import { PlanId, PlanName } from './types';
/**
 * Names convention for each plan ID
 *
 * Representation : Front, CF
 */
export declare const PlanNameConvention: {
    [key in PlanId]: PlanName;
};
/**
 * Addons used in a specific bot
 *
 * Type : DB model (bots/{botId}/billing/addons)
 * Representation : Front, CF
 */
export declare class BotBillingAddons {
    contributor: number;
    additional_users: number;
    support: number;
    white_label: boolean;
    constructor(addons: Partial<BotBillingAddons>);
}
/**
 * Model of options of a plan
 *
 * Type : DB model (bots/{botId}/billing/options)
 * Representation : Front, CF
 */
export declare class BotBillingOptions {
    deployments: number;
    users: number;
    nlp: number;
    api_storages: number;
    sso_connection: boolean;
    stripe_connection: boolean;
    analytics_access: boolean;
    support_access: boolean;
    broadcast_access: boolean;
    constructor(options: Partial<BotBillingOptions>);
    /**
     * Update a specific option value
     *
     * Called in : Front
     *
     * @param option - target option to update
     * @param value - new value of target option
     */
    updateOption(option: keyof BotBillingOptions, value: number | boolean): void;
}
/**
 * Complete model of billing infos in bot
 * including BotBillingOptions, BotBillingAddons, and other infos
 * such as subscription date
 *
 * Type : DB model (bots/{botId}/billing)
 * Representation : Front, CF
 */
export declare class BotBilling {
    activePlan: PlanId;
    plan_period_start: number;
    plans: {
        [plan in PlanId]?: PlanInfos;
    };
    options: BotBillingOptions;
    addons: BotBillingAddons;
    enable_downgrade: 'none' | 'no_free' | 'all';
    constructor(infos: Partial<BotBilling>);
    /**
     * Switch from a plan to another in a bot
     *
     * Called in : CF
     *
     * @param previous - previous plan
     * @param current - target plan
     */
    switchPlan(previous: PlanId, current: PlanId): Promise<void>;
    /**
     * Set default plan subscription infos for a newly subscribed plan
     *
     * Called in : CF
     *
     * @param planId - plan for which to register defaults
     */
    private registerPlanDefaults;
}
/**
 * Complete model of a plan
 * Used to handle plans computation in the app
 *
 * Type : app model
 * Representation : Front, CF
 */
export declare class BillingPlan extends BotBillingOptions {
    name: PlanName;
    id: PlanId;
    outperforms: PlanId[];
    is_free_plan: boolean;
    rate: number;
    constructor(plan: Partial<BillingPlan>);
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
    isReplacing(previous: PlanId, enable_downgrade?: boolean): boolean;
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
    compare(options: BotBillingOptions, skip_free?: boolean): boolean;
}
