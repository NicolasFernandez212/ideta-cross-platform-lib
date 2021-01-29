/**
 * To visualize "active" conversations, to switch from Messages to Conversations
 * by adding an aggregation step in the pipeline
 */
export type AggregationStep = string[];

export type Granularity = 'day' | 'week' | 'month' | 'year';

export type TimeSerie = { date: string; value: number; group: string }[];
