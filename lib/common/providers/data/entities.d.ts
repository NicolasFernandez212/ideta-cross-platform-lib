import { DataStoreElem } from './interfaces';
/**
 * Data store model
 *
 * Type : DB model (data-stores/{botId}/{channel})
 * Representation : Front, Back, CF
 */
export declare class DataStore {
    [key: string]: DataStoreElem;
    constructor(store?: any, isKeyBased?: boolean);
}
