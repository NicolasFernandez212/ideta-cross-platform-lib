import { DisplayOptions } from './interfaces';
/**
 * All channels currently available in app
 *
 * Representation : Front, Back, CF
 */
export declare type Channel = 'sandbox' | 'web' | 'facebook' | 'google' | 'slack' | 'smooch' | 'twiliovoice' | 'workplace';
/**
 * All channels that can be deployed
 *
 * Representation : Front, Back, CF
 */
export declare type DeployableChannel = Exclude<Channel, 'sandbox'>;
/**
 * All NLP services currently available in app
 *
 * Representation : Front, Back, CF
 */
export declare type NlpService = 'dialogflow' | 'luis';
/**
 * All status of lexicon import/export steps
 *
 * Representation : Front, Back, CF
 */
export declare type NlpServiceStatus = 'importing' | 'imported' | 'exporting' | 'exported' | 'error';
/**
 * All Oauth services currently available in app
 * !! Must be updated along with ButtonLoginService type
 *
 * Representation : Front, Back, CF
 */
export declare type OAuthService = 'google' | 'facebook';
/**
 * All attachment types currently accepted in app
 *
 * Representation : Front, Back, CF
 */
export declare type AttachmentType = 'image' | 'video' | 'audio' | 'file';
/**
 * All displayOptions children
 *
 * Representation : Front
 */
export declare type DisplayOptionName = Exclude<keyof DisplayOptions, 'layout' | 'save'>;
/**
 * All background types
 *
 * Representation : Front (web channel)
 */
export declare type BackgroundType = 'url' | 'color';
/**
 * All contexts where the bot-display is currently used
 *
 * Representation : Front
 */
export declare type DisplayContext = 'preview' | 'sandbox' | 'web' | 'cockpit' | 'embedded';
