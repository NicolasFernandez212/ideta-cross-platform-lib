import { DialogflowCredentials, LuisCredentials } from './interfaces';

export type LexiconCredentials = DialogflowCredentials | LuisCredentials;

/**
 * All NLP services currently available in app
 *
 * Representation : Front, Back, CF
 */
export type NlpService = 'dialogflow' | 'luis';
