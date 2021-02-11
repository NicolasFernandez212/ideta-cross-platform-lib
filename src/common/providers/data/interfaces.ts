import { AsyncAction } from '../node/interfaces';
import { DataScope, DataStoreElemArrayType, DataStoreElemKeyType, DataStoreElemType } from './types';

export interface DataStore {
  [key: string]: DataStoreElem;
}

export interface DataStoreElemKeys {
  [key: string]: DataStoreElemKey;
}

export interface DataStoreElemKey {
  key: string;
  type: DataStoreElemKeyType;
}

export interface DataStoreArrayElems {
  length: DataStoreElemKey;
  type: DataStoreElemArrayType;
  // If Data Key elements are Objects
  keys?: DataStoreElemKeys;
}

export interface DataAsyncAction {
  trigger: 'update' | 'write';
  action: AsyncAction;
}

export interface DataStoreElem {
  id?: string;
  key?: string;
  type?: DataStoreElemType;
  scope?: DataScope;
  desc?: string;
  // If Data Key is a bot key
  value?: DataStoreElemKeyType;
  // If Data Key is a conversation key
  init?: any;
  isSupportKey?: boolean;
  isTemplateKey?: boolean;
  minimum?: number;
  // If Data Key is an Object
  keys?: DataStoreElemKeys;
  // If Data Key is an Array
  elements?: DataStoreArrayElems;
  actions?: DataAsyncAction[];
  editable?: boolean;
  // Keep previous bot data values on deploy
  keepValue?: boolean;
}

/*
 * Keys calling interface
 */
export interface DataRichSegment {
  type?: 'literal' | 'key' | 'element';
  value?: string;
}

export interface DataAsyncAction {
  trigger: 'update' | 'write';
  action: AsyncAction; // ###R BackgroundAction
}

export interface ParsedAddress {
  subject?: string;
  property?: string;
  index?: string;
}
