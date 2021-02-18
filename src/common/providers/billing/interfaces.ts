import { PlanId, PlanName } from './types';

/**
 * Model of plan infos contained in BotBillling
 * 
 * Type : DB model (bots/{botId}/billing/plans/{planId})
 * Representation : Front, CF
 */
export interface PlanInfos {
  id?: PlanId;
  name?: PlanName;
  active_trial?: boolean; //  is admin on trial for this plan
  expired_trial?: boolean; // has admin already used his trial
  periods?: PlanPeriod[]; // records of all past periods in this plan
}

/**
 * Model of plan period infos contained in BotBillling
 * 
 * Type : DB model (bots/{botId}/billing/plans/{planId}/periods)
 * Representation : Front, CF
 */
export interface PlanPeriod {
  start?: number;
  end?: number;
}
