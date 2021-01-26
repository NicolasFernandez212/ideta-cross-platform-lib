import { PlanId, PlanName } from './types';

// Used in billing infos contained in bots
export interface PlanInfos {
  id?: PlanId;
  name?: PlanName;
  active_trial?: boolean; //  is admin on trial for this plan
  expired_trial?: boolean; // has admin already used his trial
  periods?: PlanPeriod[]; // records of all past periods in this plan
}

export interface PlanPeriod {
  start?: number;
  end?: number;
}
