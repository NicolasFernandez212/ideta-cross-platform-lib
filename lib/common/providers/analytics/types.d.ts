/**
 * To visualize "active" conversations, to switch from Messages to Conversations
 * by adding an aggregation step in the pipeline
 */
export declare type AggregationStep = string[];
export declare type Granularity = 'day' | 'week' | 'month' | 'year';
export declare type TimeSerie = {
    date: string;
    value: number;
    group: string;
}[];
