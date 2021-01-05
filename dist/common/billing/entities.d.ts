import { PlanId, PlanName } from "./types";
export declare class BotBillingAddons {
    contributor: number;
    additional_users: number;
    support: number;
    white_label: boolean;
    constructor(addons: Partial<BotBillingAddons>);
}
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
    updateOption(option: keyof BotBillingOptions, value: number | boolean): void;
}
export declare class BillingPlan extends BotBillingOptions {
    name: PlanName;
    id: PlanId;
    outperforms: PlanId[];
    is_free_plan: boolean;
    rate: number;
    constructor(plan: Partial<BillingPlan>);
    isReplacing(previous: PlanId, enable_downgrade?: boolean): boolean;
    compare(options: BotBillingOptions, skip_free?: boolean): boolean;
}
export declare class BotBilling {
    activePlan: PlanId;
    plan_period_start: number;
    plans: {
        [plan in PlanId]?: PlanInfos;
    };
    options: BotBillingOptions;
    addons: BotBillingAddons;
    enable_downgrade: "none" | "no_free" | "all";
    constructor(infos: Partial<BotBilling>);
    switchPlan(previous: PlanId, current: PlanId): Promise<void>;
    private registerPlanDefaults;
}
export interface PlanInfos {
    id?: PlanId;
    name?: PlanName;
    active_trial?: boolean;
    expired_trial?: boolean;
    periods?: PlanPeriod[];
}
export interface PlanPeriod {
    start?: number;
    end?: number;
}
