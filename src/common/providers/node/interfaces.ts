import { ComparisonActionType } from './types';

/*
 * Data Comparisons -----------------------------------------------------------
 */

export interface ComparisonAction {
  type?: ComparisonActionType;
  targetNode?: string;
}
