import { DataScope, DataStoreElemArrayType, DataStoreElemKeyType, DataStoreElemType } from './types';

import { AsyncAction } from '../node/node-mapping/entities';


export interface DataStoreElem {
  id?: string;
  key?: string;
  type?: DataStoreElemType;
  scope?: DataScope;
  desc?: string;
  // If Data Key is a primitive bot key
  value?: DataStoreElemKeyType;
  // If Data Key is a primitive conversation key
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

/**
 * Object keys properties model
 *
 * Type : DB model (data-stores/{botId}/{channel}/{keyId}/keys)
 * Representation : Front, Back, CF
 */
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

/*
 * Keys calling interface
 */
export interface DataRichSegment {
  type?: 'literal' | 'key' | 'element';
  value?: string | number;
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
