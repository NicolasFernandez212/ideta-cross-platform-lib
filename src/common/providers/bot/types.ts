import { DisplayOptions } from './interfaces';

/**
 * All channels currently available in app
 *
 * Representation : Front, Back, CF
 */
export type Channel = 'sandbox' | 'web' | 'facebook' | 'google' | 'slack' | 'smooch' | 'twiliovoice' | 'workplace';

/**
 * All channels that can be deployed
 *
 * Representation : Front, Back, CF
 */
export type DeployableChannel = Exclude<Channel, 'sandbox'>;

/**
 * All NLP services currently available in app
 *
 * Representation : Front, Back, CF
 */
export type NlpService = 'dialogflow' | 'luis';

/**
 * All status of lexicon import/export steps
 *
 * Representation : Front, Back, CF
 */
export type NlpServiceStatus = 'importing' | 'imported' | 'exporting' | 'exported' | 'error';

/**
 * All Oauth services currently available in app
 * !! Must be updated along with ButtonLoginService type
 *
 * Representation : Front, Back, CF
 */
export type OAuthService = 'google' | 'facebook';

/**
 * All attachment types currently accepted in app
 *
 * Representation : Front, Back, CF
 */
export type AttachmentType = 'image' | 'video' | 'audio' | 'file';

/**
 * All displayOptions children
 *
 * Representation : Front
 */
export type DisplayOptionName = Exclude<keyof DisplayOptions, 'layout' | 'save'>;

/**
 * All background types
 *
 * Representation : Front (web channel)
 */
export type BackgroundType = 'url' | 'color';

/**
 * All contexts where the bot-display is currently used
 *
 * Representation : Front
 */
export type DisplayContext = 'preview' | 'sandbox' | 'web' | 'cockpit' | 'embedded';
