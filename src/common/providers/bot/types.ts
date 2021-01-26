export type Channel = 'sandbox' | 'web' | 'facebook' | 'google' | 'smooch' | 'workplace' | 'twilio';

export type NlpService = 'dialogflow' | 'luis';

export type NlpServiceStatus = 'importing' | 'imported' | 'exporting' | 'exported' | 'error';

export type OAuthService = 'google' | 'facebook';

export type AttachmentType = 'image' | 'video' | 'audio' | 'file';

export type DisplayOptionName = 'logo' | 'background' | 'icon' | 'colors' | 'chat' | 'vocal';

export type BackgroundType = 'url' | 'color';

export type DataStoreElemKeyType = 'string' | 'number' | 'boolean';
export type DataStoreElemArrayType = DataStoreElemKeyType | 'object';
export type DataStoreElemType = DataStoreElemArrayType | 'array';

/*
 * Note about types :
 * AlloweType is a type which is composed by different sub types
 * - 'content' : allows selection of an element or an element's property,
 *               based on it's index in a list
 * - 'element' : same as 'content' and also enables the list.length property
 * - 'array.xxx' : composite types forcing forms to enable arrays based on their
 *                  elements type.
 */
export type AllowedType = DataStoreElemType | 'content' | 'element' | 'array.object' | 'array.string' | 'array.number';

/*
 * Note about scopes :
 * - 'identifier' : abstract scope that allows to select
 *                  'first_name' and 'last_name' as editable keys
 */
export type RealScope = 'conversation' | 'bot';
export type DataScope = RealScope | 'system';
export type AllowedScope = DataScope | 'identifier';

export type DisplayContext = 'preview' | 'sandbox' | 'web' | 'cockpit' | 'embedded';
