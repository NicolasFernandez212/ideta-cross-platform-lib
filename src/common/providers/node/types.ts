import { DataBoundedOperationOptions, DataComposedOperationOptions, DataSearchOperationOptions } from './entities';

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
  | 'encodeB64'
  | 'decodeB64'
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
  // date operations
  | 'addTime'
  // misc operations
  | 'parse'
  | 'conditional';

export type OperationOptions = DataBoundedOperationOptions | DataComposedOperationOptions | DataSearchOperationOptions;

export type ComparisonType = '!' | '.!' | '==' | '<>' | '<' | '<=' | '>' | '>=' | '^$';

export type ComparisonActionType = 'exit' | 'next';

export type EmulatedNodeId = 'typing' | 'admin_to_user-node' | 'stateless-node' | 'bot-not-found' | 'lost-track';
