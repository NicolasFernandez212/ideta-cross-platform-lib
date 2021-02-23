"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataStore = void 0;
/**
 * Data store model
 *
 * Type : DB model (data-stores/{botId}/{channel})
 * Representation : Front, Back, CF
 */
class DataStore {
    constructor(store) {
        if (store) {
            Object.keys(store).reduce((acc, curr) => {
                this[store[curr].key] = Object.assign(Object.assign({}, store[curr]), { id: curr });
                return acc;
            });
        }
    }
}
exports.DataStore = DataStore;
