/**
 * To visualize "active" conversations, to switch from Messages to Conversations
 * by adding an aggregation step in the pipeline
 */
export type AggregationStep = string[];

export type Granularity = 'day' | 'week' | 'month' | 'year';

export type TimeSeries = { date: string; value: number; group: string }[];

export type TimeSerie = { year: number; month?: number; dayOfMonth?: number; value: number }[];

export type CollectionName = 'conversations' | 'messages';
