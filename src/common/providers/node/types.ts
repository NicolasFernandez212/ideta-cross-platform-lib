import { DataBoundedOperationOptions, DataComposedOperationOptions, DataSearchOperationOptions } from './interfaces';

export type OptionBehaviorType = 'message' | 'api';

export type OperationType =
  // general operations
  | 'set'
  | 'delete'
  | 'erase'
  | 'dateNow'
  // string operations
  | 'concatenate'
  | 'split'
  | 'replace'
  | 'match'
  | 'toString'
  | 'toUpperCase'
  | 'toLowerCase'
  | 'stringify'
  // number operations
  | 'add'
  | 'remove'
  | 'divide'
  | 'multiply'
  | 'random'
  | 'round'
  | 'maximum'
  | 'minimum'
  | 'formula'
  | 'toNumber'
  // array operations
  | 'push'
  | 'slice'
  | 'find'
  | 'filter'
  | 'sort'
  | 'invertedSort'
  | 'join'
  // object operations
  | 'get'
  | 'merge'
  // misc operations
  | 'parse'
  | 'conditional';

export type OperationOptions = DataBoundedOperationOptions | DataComposedOperationOptions | DataSearchOperationOptions;

export type ComparisonType = '!' | '.!' | '==' | '<>' | '<' | '<=' | '>' | '>=' | '^$';

export type ComparisonActionType = 'exit' | 'next';
