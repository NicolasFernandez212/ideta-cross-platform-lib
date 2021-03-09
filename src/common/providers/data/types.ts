/**
 * All data key types available in app
 * Note : they are sliced in different levels for convenience
 *
 * Representation : Front, Back, CF
 */
export type DataStoreElemKeyType = 'string' | 'number' | 'boolean';
export type DataStoreElemArrayType = DataStoreElemKeyType | 'object';
export type DataStoreElemType = DataStoreElemArrayType | 'array';

/**
 * Allowed type is used in the front to determine if which type of keys can be selected in specific forms
 * e.g. in text bubbles, only primitive keys can be used, therefore, we pass 'string', 'number' and 'boolean'
 * to the associated form
 *
 * -- Note about this type's content --
 * AllowedType is a child of DataStoreElemType and declare additional 'ghosts' types to handle specific cases :
 *
 * - 'content' : allows selection of an element or an element's property,
 *               based on it's index in a list
 * - 'element' : same as 'content' and also enables the list.length property
 * - 'array.xxx' : composite types forcing forms to enable arrays based on their
 *                  elements type.
 *
 * Representation : Front
 */
export type AllowedType = DataStoreElemType | 'content' | 'element' | 'array.object' | 'array.string' | 'array.number';

/**
 * RealScopes are the two scopes in which data are stored :
 * - conversation -> all data for each conversations
 * - bot -> all data shared across conversations
 *
 * Representation : Front
 */
export type RealScope = 'conversation' | 'bot';

/**
 * ...See DataScope description
 * 
 * - 'system' is a ghost scope representing conversation data keys that cannot be deleted or edited
 * (these are pre-declared keys that carry metadata of the conversation)
 *
 * Representation : Front
 */
export type DataScope = RealScope | 'system';

/*
 * ...See RealScope and DataScope description
 *
 * -- Note about scopes this type's content --
 * AllowedScope is a child of DataScope and declare additional 'ghosts' scopes to handle specific cases :
 *
 * - 'identifier' : allows edition of 'first_name' and 'last_name' keys (which are system scope keys)
 *
 * Representation : Front
 */
export type AllowedScope = DataScope | 'identifier';
