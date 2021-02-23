import { DataStoreElem } from './interfaces';

/**
 * Data store model
 *
 * Type : DB model (data-stores/{botId}/{channel})
 * Representation : Front, Back, CF
 */
export class DataStore {
  [key: string]: DataStoreElem;

  constructor(store?: any) {
    if (store) {
      Object.keys(store).reduce((acc: any, curr: string) => {
        this[store[curr].key] = { ...store[curr], id: curr };
        return acc;
      });
    }
  }
}
