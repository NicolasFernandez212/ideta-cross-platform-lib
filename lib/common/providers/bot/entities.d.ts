import { BotBilling } from '../billing/entities';
import { ConversationKeepAlive } from '../conversation-session/interfaces';
import { DataStore } from '../data/entities';
import { NlpOptions } from '../lexicon/entities';
import { NlpService } from '../lexicon/types';
import { MappingOptions } from '../node/node-mapping/entities';
import { UserEntry } from '../user/interfaces';
import { BotTemplateSettings, ChannelsOptions, EmailWatermark, NlpServiceInfos, OAuthServiceInfos } from './interfaces';
import { OAuthService } from './types';
/**
 * Bot model
 *
 * Type : DB model (bots/{botId})
 * Representation : Front, Back, CF
 */
export declare class Bot {
    billing?: BotBilling;
    channels?: ChannelsOptions;
    conversationKeepAlives?: ConversationKeepAlive[];
    createdAt: Date;
    createdBy: string;
    dataStore?: DataStore;
    defaultMappingOptions: MappingOptions;
    emailWatermark?: EmailWatermark;
    endPointBack: string;
    globalIntents?: NlpOptions;
    globalNlpStorage?: any;
    id?: string;
    name: string;
    nbNodes: number;
    nlpServices?: {
        [service in NlpService]: NlpServiceInfos;
    };
    oauthServices?: {
        [service in OAuthService]: OAuthServiceInfos;
    };
    templateSettings?: BotTemplateSettings;
    token: string;
    updatedAt: Date;
    useAutoConnect?: boolean;
    useChannelDataStore?: boolean;
    useMap?: boolean;
    users: {
        [id: string]: UserEntry;
    };
    constructor(bot: any);
}
