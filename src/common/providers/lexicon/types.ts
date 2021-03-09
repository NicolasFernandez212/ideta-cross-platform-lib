import { DialogflowCredentials, LuisCredentials } from './interfaces';

/**
 * Generic model of all credentials in base
 * Note : this interface must be updated when a new service is added
 *
 * Representation : Front, Back, CF
 */
export type LexiconCredentials = DialogflowCredentials | LuisCredentials;

/**
 * All NLP services currently available in app
 *
 * Representation : Front, Back, CF
 */
export type NlpService = 'dialogflow' | 'luis';
