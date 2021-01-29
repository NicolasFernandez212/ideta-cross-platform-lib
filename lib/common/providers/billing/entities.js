"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BotBillingAddons {
    constructor(addons) {
        this.contributor = addons.contributor || 0;
        this.additional_users = addons.additional_users || 0;
        this.support = addons.support || 0;
        this.white_label = addons.white_label || false;
    }
}
exports.BotBillingAddons = BotBillingAddons;
class BotBillingOptions {
    constructor(options) {
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
    updateOption(option, value) {
        if (typeof this[option] !== typeof value)
            return;
        switch (option) {
            case 'deployments':
                this.deployments = this.deployments + value >= 0 ? this.deployments + value : 0;
                break;
            case 'users':
                this.users = this.users + value >= 0 ? this.users + value : 0;
                break;
            case 'nlp':
                this.nlp = this.nlp + value >= 0 ? this.nlp + value : 0;
                break;
            case 'api_storages':
                this.api_storages = this.api_storages + value >= 0 ? this.api_storages + value : 0;
                break;
            case 'sso_connection':
                this.sso_connection = value;
                break;
            case 'stripe_connection':
                this.stripe_connection = value;
                break;
            case 'analytics_access':
                this.analytics_access = value;
                break;
            case 'support_access':
                this.support_access = value;
                break;
            case 'broadcast_access':
                this.broadcast_access = value;
                break;
        }
    }
}
exports.BotBillingOptions = BotBillingOptions;
class BillingPlan extends BotBillingOptions {
    constructor(plan) {
        super(plan);
        this.id = plan.id || 'free';
        this.name = plan.name || exports.PlanNameConvention[this.id];
        this.outperforms = plan.outperforms || [];
        this.is_free_plan = plan.is_free_plan || false;
        this.rate = plan.rate || 0;
    }
    /*
     * returns TRUE if the compared plan can replace the current one
     */
    isReplacing(previous, enable_downgrade) {
        return previous !== this.id && (enable_downgrade || this.outperforms.indexOf(previous) > -1);
    }
    /*
     * returns TRUE if the compared plan is matches the current instance
     */
    compare(options, skip_free) {
        if (this.is_free_plan && skip_free) {
            return false;
        }
        return !(options.deployments > this.deployments ||
            options.users > this.users ||
            options.nlp > this.nlp ||
            options.api_storages > this.api_storages ||
            (options.sso_connection && !this.sso_connection) ||
            (options.stripe_connection && !this.stripe_connection) ||
            (options.analytics_access && !this.analytics_access) ||
            (options.support_access && !this.support_access) ||
            (options.broadcast_access && !this.broadcast_access));
    }
}
exports.BillingPlan = BillingPlan;
class BotBilling {
    constructor(infos) {
        this.activePlan = infos.activePlan || 'free';
        this.plan_period_start = Date.now();
        this.plans = infos.plans || {};
        this.options = new BotBillingOptions(infos.options || {});
        this.addons = new BotBillingAddons(infos.addons || {});
        this.enable_downgrade = infos.enable_downgrade || 'none';
    }
    // Not used in Front
    switchPlan(previous, current) {
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
    registerPlanDefaults(planId) {
        this.plans[planId] = this.plans[planId] || {};
        this.plans[planId].active_trial = this.plans[planId].active_trial || null;
        this.plans[planId].expired_trial = this.plans[planId].expired_trial || null;
        this.plans[planId].id = this.plans[planId].id || planId;
        this.plans[planId].name = this.plans[planId].name || exports.PlanNameConvention[planId];
        this.plans[planId].periods = this.plans[planId].periods || [];
    }
}
exports.BotBilling = BotBilling;
// C - D
exports.PlanNameConvention = {
    free: 'Free',
    starter: 'Starter',
    starter_AI: 'Starter AI',
    professional: 'Professional',
};
