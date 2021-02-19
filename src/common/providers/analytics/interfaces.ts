import { CollectionName, Granularity } from './types';

import { Channel } from '../bot/types';

/**
 * Summary of conversation and key data from MongoDB for a bot
 *
 * Type : app model
 * Representation : Front (analytics)
 */
export interface BotSummary {
  startDate: Date;
  activeChannels: Channel[];
  activeDataKeys: string[];
}

/**
 * Analytics filters that can by applied to retrieve conversation data
 *
 * Type : app model
 * Representation : Front (analytics)
 */
export interface AnalyticsFilters {
  channels: Channel[];
  granularity: Granularity;
  startDate?: Date;
  endDate?: Date;
}

/**
 * Additional analytics filters that can by applied to retrieve conversation data
 *
 * Type : app model
 * Representation : Front (analytics)
 */
export interface QueryAdditionalFilters {
  startDate?: Date;
  endDate?: Date;
  channels?: Channel[];
  lookUp?: CollectionName;
}

// C - D
export type QueryFilters<T> = Partial<T> & QueryAdditionalFilters;

/**
 * Analytics filters that can by applied to retrieve dataKey data
 *
 * Type : app model
 * Representation : Front (analytics)
 */
export interface DataKeySplit {
  value: string | number;
  count: number;
  share: number;
  length: number;
}
