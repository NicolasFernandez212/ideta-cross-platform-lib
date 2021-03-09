import { DialogflowCredentials, LuisCredentials } from './interfaces';
/**
 * Generic model of all credentials in base
 * Note : this interface must be updated when a new service is added
 *
 * Representation : Front, Back, CF
 */
export declare type LexiconCredentials = DialogflowCredentials | LuisCredentials;
/**
 * All NLP services currently available in app
 *
 * Representation : Front, Back, CF
 */
export declare type NlpService = 'dialogflow' | 'luis';
