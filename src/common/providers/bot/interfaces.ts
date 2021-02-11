import {
  Channel,
  NlpService,
  OAuthService,
  NlpServiceStatus,
  DisplayOptionName,
  BackgroundType,
  DisplayContext,
} from './types';
import { BotBilling } from '../billing/entities';
import { AsyncAction, MappingOptions, NlpOptions } from '../node/interfaces';
import { ButtonElement, LayoutSize } from '../node/types';
import { UserRoleObject } from '../user/interfaces';
import { DataStore } from '../data/interfaces';

export interface Bot {
  id: string;
  name: string;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  endPointBack: string;
  nbNodes: number;
  users: { [id: string]: UserRoleObject };
  conversationKeepAlives?: ConversationKeepAlive[];
  defaultMappingOptions: MappingOptions;
  dataStore?: DataStore;
  globalIntents?: NlpOptions;
  emailWatermark?: EmailWatermark;
  channels?: { [channel in Channel]: ChannelInfos };
  nlpServices?: { [service in NlpService]: NlpServiceInfos };
  oauthServices?: { [service in OAuthService]: OAuthServiceInfos };
  billing?: BotBilling;
  token: string;
  // used to kown if a bot should only use
  // sandbox dataStore or each channels dataStore
  useChannelDataStore?: boolean;
  // used to know if a bot should use the map system
  useMap?: boolean;
  useAutoConnect?: boolean;
  templateSettings?: BotTemplateSettings;
}

export interface ChannelInfos {
  isUpdated?: boolean;
  usersCount: number;
  conversations: number;
  deployedAt?: Date;
  status?: 'deployed' | 'deploying' | 'undeploying' | 'error';
  statusError?: string;
}

/*
 * NLP
 */

export interface NlpServiceInfos {
  status: NlpServiceStatus;
  statusError: string;
  importedAt?: Date;
  exportedAt?: Date;
}

/*
 * OAuth
 */

export interface OAuthServiceInfos {
  clientId: string;
  clientSecret: string;
}

export interface ConversationKeepAlive {
  delay: number; // Time in minutes
  message: string;
  backgroundActions: AsyncAction[];
}

export interface EmailWatermark {
  image: string;
  imageSize: string;
}

export interface BotTemplateSettings {
  creationBotId?: string;
  id: string;
  image: string;
  lang?: string;
  redirection: string;
  useCreationBot?: boolean;
  title: string;
  url?: string;
}

export interface WorkplaceChannelInfos extends ChannelInfos {
  pageInfos: WorkplaceAppInfos;
}

export interface WorkplaceAppInfos {
  appId: string;
  appSecret: string;
}

export interface WebChannelInfos extends ChannelInfos {
  displayOptions: DisplayOptions;
  integration: WebIntegration;
  params: WebParams;
  menu: WebMenu;
}

/*
 * Display Options
 */

export interface DisplayOption {
  key: DisplayOptionName;
  active: boolean;
  values: { [option: string]: string | number | boolean };
}

export interface LogoOption extends DisplayOption {
  active: boolean;
  key: 'logo';
  values: {
    url: string;
  };
}

export interface BackgroundOption extends DisplayOption {
  active: boolean;
  key: 'background';
  values: {
    type: BackgroundType;
    url: string;
    color: string;
    opacity: number;
    position: string;
  };
}

export interface IconOption extends DisplayOption {
  active: boolean;
  key: 'icon';
  values: {
    url: string;
  };
}

export interface ColorsOption extends DisplayOption {
  active: boolean;
  key: 'colors';
  values: {
    botMessageBg: string;
    botMessageTxt: string;
    userMessageBg: string;
    userMessageTxt: string;
    webFooter: string;
    webHeader: string;
    controlButtons: string;
  };
}

export interface ChatOption extends DisplayOption {
  active: boolean;
  key: 'chat';
  values: {
    freetext: boolean;
    attachments: boolean;
    restart: boolean;
    restartTarget: string;
    usedQR: boolean;
    usedButtons: boolean;
    delay: number;
    deleteOnReload: boolean;
    deleteOnRestart: boolean;
    showTypingVisual: boolean;
    showMessageDate: boolean;
    showMessageRead: boolean;
    setInactiveAfter: number;
    no_branding: boolean;
    layout: LayoutSize;
    nodesLayout: LayoutSize;
  };
}

export interface VocalOption extends DisplayOption {
  active: boolean;
  key: 'vocal';
  values: {
    speechToText: boolean;
    autoSend: boolean;
    autoSendDelay: number;
    textToSpeech: boolean;
    autoTextToSpeech: boolean;
    toggleAutoTextToSpeech: boolean;
    speechLang: string;
  };
}

/*
 * Web Integration
 */

export interface WebIntegration {
  useAvatar: boolean;
  colorBg: string;
  colorFg: string;
}

/*
 * Web Parameters
 */

export interface WebParams {
  [paramId: string]: WebParam;
}

export interface WebParam {
  id: string;
  isAlternativeId: boolean;
  key: string;
}

/*
 * Web Menu
 */

export interface WebMenu {
  active: boolean;
  options: {
    alwaysVisible: boolean;
    buttons: ButtonElement[];
  };
}

/*
 * Share Infos
 */

export interface ShareInfos {
  ogDescription: string;
  ogImage: string;
  ogSiteName: string;
  ogTitle: string;
  ogUrl: string;
  pageTitle: string;
  twCard: string;
  twDescription: string;
  twImage: string;
  twSite: string;
  twTitle: string;
}

/*
 * Data Transfer settings
 */

export interface DataTransferOrders {
  [settingId: string]: DataTransferOrder;
}

// DataTransfer name is already used by the Drag and Drop lib
export interface DataTransferOrder {
  id: string;
  sourceType: 'cookie' | 'variable' | 'localStorage';
  source: string;
  target: string;
}

export interface TwilioChannelInfos extends ChannelInfos {
  pageInfos: TwilioPageInfos;
}

export interface TwilioPageInfos {
  id: string;
}

export interface SmoochChannelInfos extends ChannelInfos {
  pageInfos: SmoochPageInfos;
}

export interface SmoochPageInfos {
  id: string;
  access_token: string;
}

export interface SlackAppInfos {
  useIdetaApp: boolean;
  appId: string;
  clientId: string;
  clientSecret: string;
}

export interface SlackTeam {
  id: string;
  name: string;
}

export interface GoogleChannelInfos extends ChannelInfos {
  finalNodes: FinalNodes;
}

export interface FinalNodes {
  [nodeId: string]: boolean;
}

export interface FacebookChannelInfos extends ChannelInfos {
  pageInfos: FacebookPageInfos;
}

export interface FacebookPageInfos {
  id: string;
  name: string;
  access_token: string;
  picture: {
    data: {
      url: string;
    };
  };
}

export interface LayoutOptions {
  framed: boolean;
  context: DisplayContext;
  inverted: boolean;
}

export interface DisplayOptions {
  logo: LogoOption;
  background: BackgroundOption;
  icon: IconOption;
  colors: ColorsOption;
  chat: ChatOption;
  vocal: VocalOption;
  layout: LayoutOptions;
  save: { freetext?: boolean; delay?: number };
}
