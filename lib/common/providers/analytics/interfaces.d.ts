import { CollectionName, Granularity } from './types';
import { Channel } from '../bot/types';
export interface BotSummary {
    startDate: Date;
    activeChannels: Channel[];
    activeDataKeys: string[];
}
/**
 * Those are the "global" filters, that can be set from the Filters panel
 */
export interface AnalyticsFilters {
    channels: Channel[];
    granularity: Granularity;
    startDate?: Date;
    endDate?: Date;
}
export interface DataKeySplit {
    value: string | number;
    count: number;
    share: number;
    length: number;
}
export interface QueryAdditionalFilters {
    startDate?: Date;
    endDate?: Date;
    channels?: Channel[];
    lookUp?: CollectionName;
}
export declare type QueryFilters<T> = Partial<T> & QueryAdditionalFilters;
