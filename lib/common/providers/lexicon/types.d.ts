import { DialogflowCredentials, LuisCredentials } from './interfaces';
export declare type LexiconCredentials = DialogflowCredentials | LuisCredentials;
/**
 * All NLP services currently available in app
 *
 * Representation : Front, Back, CF
 */
export declare type NlpService = 'dialogflow' | 'luis';
