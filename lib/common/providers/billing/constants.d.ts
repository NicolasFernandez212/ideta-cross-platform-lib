import { BillingPlan } from './entities';
import { PlanId, PlanName } from './types';
export declare const AddonsPriceConvention: {
    contributor: number;
    additional_users: number;
    support: number;
    white_label: number;
};
export declare const PlanNameConvention: {
    [key in PlanId]: PlanName;
};
export declare const Plans: BillingPlan[];
