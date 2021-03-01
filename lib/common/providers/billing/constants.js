"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plans = exports.AddonsPriceConvention = void 0;
const entities_1 = require("./entities");
/**
 * Prices convention for each existing plan
 * Note : update here if plans prices must change
 *
 * Type : app model
 * Representation : Front, CF
 */
exports.AddonsPriceConvention = {
    contributor: 50,
    additional_users: 20,
    support: 30,
    white_label: 20
};
/**
 * List of existing plans and their settings
 * Note : update here if plans settings must change
 *
 * Type : app model
 * Representation : Front, CF
 */
exports.Plans = [
    new entities_1.BillingPlan({
        name: 'Free',
        id: 'free',
        rate: 0,
        outperforms: [],
        is_free_plan: true,
        deployments: 0,
        users: 1,
        nlp: Infinity,
        api_storages: Infinity,
        sso_connection: true,
        stripe_connection: true,
        analytics_access: true,
        support_access: true,
        broadcast_access: false
    }),
    new entities_1.BillingPlan({
        name: 'Starter',
        id: 'starter',
        rate: 19,
        outperforms: ['free'],
        deployments: 1,
        users: 50000,
        nlp: 0,
        api_storages: 0,
        sso_connection: false,
        stripe_connection: false,
        analytics_access: true,
        support_access: false,
        broadcast_access: false
    }),
    new entities_1.BillingPlan({
        name: 'Starter AI',
        id: 'starter_AI',
        rate: 59,
        outperforms: ['free', 'starter'],
        deployments: 1,
        users: 50000,
        nlp: Infinity,
        api_storages: 0,
        sso_connection: false,
        stripe_connection: false,
        analytics_access: true,
        support_access: true,
        broadcast_access: false
    }),
    new entities_1.BillingPlan({
        name: 'Professional',
        id: 'professional',
        rate: 299,
        outperforms: ['free', 'starter', 'starter_AI'],
        deployments: Infinity,
        users: 50000,
        nlp: Infinity,
        api_storages: Infinity,
        sso_connection: true,
        stripe_connection: true,
        analytics_access: true,
        support_access: true,
        broadcast_access: false
    })
];
