import { PlanId, PlanName } from './types';
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
