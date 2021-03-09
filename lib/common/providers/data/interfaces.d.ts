import { DataScope, DataStoreElemArrayType, DataStoreElemKeyType, DataStoreElemType } from './types';
import { AsyncAction } from '../node/node-mapping/entities';
export interface DataStoreElem {
    id?: string;
    key?: string;
    type?: DataStoreElemType;
    scope?: DataScope;
    desc?: string;
    value?: DataStoreElemKeyType;
    init?: any;
    isSupportKey?: boolean;
    isTemplateKey?: boolean;
    minimum?: number;
    keys?: DataStoreElemKeys;
    elements?: DataStoreArrayElems;
    actions?: DataAsyncAction[];
    editable?: boolean;
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
    keys?: DataStoreElemKeys;
}
export interface DataAsyncAction {
    trigger: 'update' | 'write';
    action: AsyncAction;
}
export interface DataRichSegment {
    type?: 'literal' | 'key' | 'element';
    value?: string | number;
}
export interface DataAsyncAction {
    trigger: 'update' | 'write';
    action: AsyncAction;
}
export interface ParsedAddress {
    subject?: string;
    property?: string;
    index?: string;
}
