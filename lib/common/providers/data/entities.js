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
    constructor(store, isKeyBased) {
        if (store) {
            Object.keys(store).forEach((dataVarId) => {
                this[isKeyBased ? store[dataVarId].key : dataVarId] = Object.assign(Object.assign({}, store[dataVarId]), { id: dataVarId });
            });
        }
    }
}
exports.DataStore = DataStore;
