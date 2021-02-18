/**
 * To visualize "active" conversations, to switch from Messages to Conversations
 * by adding an aggregation step in the pipeline
 *
 * Type : app model
 * Representation : Back (analytics)
 */
export declare type AggregationStep = string[];
/**
 * Set of granularities that can be selected to build the time filter
 *
 * Type : app model
 * Representation : Front (analytics)
 */
export declare type Granularity = 'day' | 'week' | 'month' | 'year';
/**
 * Result of an analytics request to be displayed as a chart on the analytics page
 *
 * Type : app model
 * Representation : Front (analytics)
 */
export declare type TimeSeries = {
    date: string;
    value: number;
    group: string;
}[];
/**
 * Description of time filter used in analytics process
 *
 * Type : app model
 * Representation : Back (analytics)
 */
export declare type TimeSerie = {
    year: number;
    month?: number;
    dayOfMonth?: number;
    value: number;
}[];
/**
 * Current collection names in Firebase and MongoDB used to compute analytics
 *
 * Type : app model
 * Representation : Back (analytics)
 */
export declare type CollectionName = 'conversations' | 'messages';
