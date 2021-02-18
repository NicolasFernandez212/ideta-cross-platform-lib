import { BillingPlan } from './entities';
/**
 * Prices convention for each existing plan
 * Note : update here if plans prices must change
 *
 * Type : app model
 * Representation : Front, CF
 */
export declare const AddonsPriceConvention: {
    contributor: number;
    additional_users: number;
    support: number;
    white_label: number;
};
/**
 * List of existing plans and their settings
 * Note : update here if plans settings must change
 *
 * Type : app model
 * Representation : Front, CF
 */
export declare const Plans: BillingPlan[];
