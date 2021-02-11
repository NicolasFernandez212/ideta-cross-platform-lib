export declare type DataStoreElemKeyType = 'string' | 'number' | 'boolean';
export declare type DataStoreElemArrayType = DataStoreElemKeyType | 'object';
export declare type DataStoreElemType = DataStoreElemArrayType | 'array';
/**
 * Note about types :
 * AlloweType is a type which is composed by different sub types
 * - 'content' : allows selection of an element or an element's property,
 *               based on it's index in a list
 * - 'element' : same as 'content' and also enables the list.length property
 * - 'array.xxx' : composite types forcing forms to enable arrays based on their
 *                  elements type.
 */
export declare type AllowedType = DataStoreElemType | 'content' | 'element' | 'array.object' | 'array.string' | 'array.number';
export declare type RealScope = 'conversation' | 'bot';
export declare type DataScope = RealScope | 'system';
export declare type AllowedScope = DataScope | 'identifier';
