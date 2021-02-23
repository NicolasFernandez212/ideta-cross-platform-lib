import { ComparisonActionType } from './types';
export interface ComparisonAction {
    type?: ComparisonActionType;
    targetNode?: string;
}
