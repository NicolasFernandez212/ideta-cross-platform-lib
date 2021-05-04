import { randomBytes } from 'crypto';

import {
  ApiCertificate,
  BotTemplateSettings,
  ChannelsOptions,
  EmailWatermark,
  NlpServiceInfos,
  OAuthServiceInfos
} from './interfaces';
import { OAuthService } from './types';

import { BotBilling } from '../billing/entities';
import { ConversationKeepAlive } from '../conversation-session/interfaces';
import { DataStore } from '../data/entities';
import { NlpOptions } from '../lexicon/entities';
import { NlpService } from '../lexicon/types';
import { MappingOptions } from '../node/node-mapping/entities';
import { UserEntry } from '../user/interfaces';

/**
 * Bot model
 *
 * Type : DB model (bots/{botId})
 * Representation : Front, Back, CF
 */
export class Bot {
  public apiCertificates?: ApiCertificate[];
  public billing?: BotBilling;
  public channels?: ChannelsOptions;
  public conversationKeepAlives?: ConversationKeepAlive[];
  public createdAt: Date;
  public createdBy: string;
  // Deprecated (use data-stores/ collection instead)
  public dataStore?: DataStore;
  public defaultMappingOptions: MappingOptions;
  // The email watermark form is displayed only if this property exists in DB
  public emailWatermark?: EmailWatermark;
  public endPointBack: string;
  public globalIntents?: NlpOptions;
  public globalNlpStorage?: any;
  public id?: string;
  public name: string;
  public nbNodes: number;
  public nlpServices?: { [service in NlpService]: NlpServiceInfos };
  public oauthServices?: { [service in OAuthService]: OAuthServiceInfos };
  public templateSettings?: BotTemplateSettings;
  public token: string;
  public updatedAt: Date;
  // used to know if support agents should have
  // their key automatically set to true
  // when they are connceted
  public useAutoConnect?: boolean;
  // used to kown if a bot should only use
  // sandbox dataStore or each channels dataStore
  public useChannelDataStore?: boolean;
  // used to know if a bot should use the map system
  public useMap?: boolean;
  public users: { [id: string]: UserEntry };

  // get ownerId(): string {
  //   return Object.keys(this.users).find((userId: string) => this.users[userId].role === 'owner');
  // }

  constructor(bot: any) {
    if (bot.id) this.id = bot.id;
    this.apiCertificates = bot.apiCertificates || [];
    this.billing = new BotBilling(bot.billing || {});
    this.channels = bot.channels || {};
    this.conversationKeepAlives = bot.conversationKeepAlives || [];
    this.createdAt = bot.createdAt || null;
    this.createdBy = bot.createdBy || null;
    this.dataStore = bot.dataStore || {};
    this.defaultMappingOptions = bot.defaultMappingOptions || {};
    this.emailWatermark = bot.emailWatermark || {};
    this.endPointBack = bot.endPointBack || '';
    this.globalIntents = bot.globalIntents || {};
    this.globalNlpStorage = bot.globalNlpStorage || {};
    this.name = bot.name || '';
    this.nbNodes = bot.nbNodes || 0;
    this.nlpServices = bot.nlpServices || {};
    this.oauthServices = bot.oauthServices || {};
    this.token = bot.token || randomBytes(32).toString('hex');
    this.useChannelDataStore = typeof bot.useChannelDataStore === 'boolean' ? bot.useChannelDataStore : true;
    this.useMap = bot.useMap || false;
    this.users = bot.users || {};
  }
}
