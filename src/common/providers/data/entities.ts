import { DataStoreElem } from './interfaces';

/**
 * Data store model
 *
 * Type : DB model (data-stores/{botId}/{channel})
 * Representation : Front, Back, CF
 */
export class DataStore {
  [key: string]: DataStoreElem;

  constructor(store?: any, isKeyBased?: boolean) {
    if (store) {
      Object.keys(store).forEach((dataVarId: string) => {
        this[isKeyBased ? store[dataVarId].key : dataVarId] = { ...store[dataVarId], id: dataVarId };
      });
    }
  }
}
