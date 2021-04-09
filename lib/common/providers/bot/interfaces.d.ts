import { NlpServiceStatus, DisplayOptionName, BackgroundType, DisplayContext, SendButtonAppearance, BotTypingBehavior } from './types';
import { LayoutSize } from '../node/node-template/types';
import { ButtonElement } from '../node/node-template/entities';
/**
 * Nlp service infos model
 *
 * Type : DB model (bots/{botId}/nlpServices/{service})
 * Representation : Front, Back, CF
 */
export interface NlpServiceInfos {
    status: NlpServiceStatus;
    statusError: string;
    importedAt?: Date;
    exportedAt?: Date;
}
/**
 * Oauth service infos model
 *
 * Type : DB model (bots/{botId}/oauthServices/{service})
 * Representation : Front, Back, CF
 */
export interface OAuthServiceInfos {
    clientId: string;
    clientSecret: string;
    isAvailable?: boolean;
}
/**
 * Email watermark settings
 *
 * Type : DB model (bots/{botId}/oauthServices/{service})
 * Representation : Front, Back, CF
 */
export interface EmailWatermark {
    image: string;
    imageSize: string;
}
/**
 * ONLY FOR TEMPLATE BOTS : model of infos used in the creation modal
 *
 * Type : DB model (bots/{botId}/templateSettings)
 * Representation : Front (creation modal)
 */
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
/**
 * CHANNELS SPECIFICATIONS ----------------------------------------------------
 * Note :
 *
 * Each channel interface inherits from ChannelInfos interface
 * and declares its own properties.
 *
 * Workplace, twilio, smooch and facebook have a common pageInfos property
 * with custom values
 */
/**
 * Global model for all channels options stored in bots
 *
 * Type : DB model (bots/{botId}/channels)
 * Representation : Front, Back, CF
 */
export interface ChannelsOptions {
    sandbox: ChannelInfos;
    web: WebChannelInfos;
    facebook: FacebookChannelInfos;
    google: GoogleChannelInfos;
    slack: SlackChannelInfos;
    smooch: SmoochChannelInfos;
    twiliovoice: TwilioChannelInfos;
    workplace: WorkplaceChannelInfos;
}
/**
 * Generic channel infos model
 * (all channel have its own interface definition implementing this one)
 *
 * Type : DB model (bots/{botId}/channels/{channel})
 * Representation : Children models
 */
export interface ChannelInfos {
    isUpdated?: boolean;
    usersCount: number;
    conversations: number;
    deployedAt?: Date;
    status?: 'deployed' | 'deploying' | 'undeploying' | 'error';
    statusError?: string;
}
/**
 * Specified channel infos model for WORKPLACE
 *
 * Type : DB model (bots/{botId}/channels/workplace)
 * Representation : Front, Back, CF
 */
export interface WorkplaceChannelInfos extends ChannelInfos {
    pageInfos: WorkplaceAppInfos;
}
/**
 * Workplace pageInfos model
 *
 * Type : DB model (bots/{botId}/channels/workplace/pageInfos)
 * Representation : Front, Back, CF
 */
export interface WorkplaceAppInfos {
    appId: string;
    appSecret: string;
}
/**
 * Specified channel infos model for TWILIO
 *
 * Type : DB model (bots/{botId}/channels/twilio)
 * Representation : Front, Back, CF
 */
export interface TwilioChannelInfos extends ChannelInfos {
    pageInfos: TwilioPageInfos;
}
/**
 * Twilio pageInfos model
 *
 * Type : DB model (bots/{botId}/channels/twilio/pageInfos)
 * Representation : Front, Back, CF
 */
export interface TwilioPageInfos {
    id?: string;
    accountSID?: string;
    authToken?: string;
    flowId?: string;
    friendlyName?: string;
    transferPhoneNumber?: string;
    timeoutListening?: string;
    problemInitiating?: string;
    problemConnecting?: string;
    speechModel?: string;
    speechTimeout?: string;
    waitingMessage?: string;
    lang?: string;
    voice?: string;
}
/**
 * Specified channel infos model for SMOOCH
 *
 * Type : DB model (bots/{botId}/channels/smooch)
 * Representation : Front, Back, CF
 */
export interface SmoochChannelInfos extends ChannelInfos {
    pageInfos: SmoochPageInfos;
}
/**
 * Smooch pageInfos model
 *
 * Type : DB model (bots/{botId}/channels/smooch/pageInfos)
 * Representation : Front, Back, CF
 */
export interface SmoochPageInfos {
    id: string;
    access_token: string;
}
/**
 * Specified channel infos model for SLACK
 *
 * Type : DB model (bots/{botId}/channels/slack)
 * Representation : Front, Back, CF
 */
export interface SlackChannelInfos extends ChannelInfos {
    appInfos: SlackAppInfos;
    teams: {
        [teamId: string]: SlackTeam;
    };
}
/**
 * Slack app infos model
 *
 * Type : DB model (bots/{botId}/channels/slack/appInfos)
 * Representation : Front, Back, CF
 */
export interface SlackAppInfos {
    useIdetaApp: boolean;
    appId: string;
    clientId: string;
    clientSecret: string;
}
/**
 * Slack team model
 *
 * Type : DB model (bots/{botId}/channels/slack/teams)
 * Representation : Front, Back, CF
 */
export interface SlackTeam {
    access_token: string;
    team_id: string;
    team_name: string;
    user_id: string;
}
/**
 * Specified channel infos model for GOOGLE
 *
 * Type : DB model (bots/{botId}/channels/google)
 * Representation : Front, Back, CF
 */
export interface GoogleChannelInfos extends ChannelInfos {
    finalNodes: FinalNodes;
}
/**
 * Google finalNodes model
 * It is a model representing a node list passed to google which
 * describe dead-ends of the conversation
 * (where google assistant should end the voice exchange)
 *
 * Type : DB model (bots/{botId}/channels/google/finalNodes)
 * Representation : Front, Back, CF
 */
export interface FinalNodes {
    [nodeId: string]: boolean;
}
/**
 * Specified channel infos model for FACEBOOK
 *
 * Type : DB model (bots/{botId}/channels/facebook)
 * Representation : Front, Back, CF
 */
export interface FacebookChannelInfos extends ChannelInfos {
    pageInfos: FacebookPageInfos;
}
/**
 * facebook pageInfos model
 *
 * Type : DB model (bots/{botId}/channels/facebook/pageInfos)
 * Representation : Front, Back, CF
 */
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
/**
 * Specified channel infos model for WEB
 *
 * Type : DB model (bots/{botId}/channels/web)
 * Representation : Front, Back, CF
 */
export interface WebChannelInfos extends ChannelInfos {
    dataTransfers: DataTransferOrders;
    displayOptions: DisplayOptions;
    integration: WebIntegration;
    menu: WebMenu;
    params: WebParams;
    share: ShareInfos;
}
/**
 * Web display options infos model
 *
 * Type : DB model (bots/{botId}/channels/web/displayOptions)
 * Representation : Front, CF
 */
export interface DisplayOptions {
    logo: LogoOption;
    background: BackgroundOption;
    icon: IconOption;
    colors: ColorsOption;
    chat: ChatOption;
    vocal: VocalOption;
    layout: LayoutOptions;
    save: {
        freetext?: boolean;
        delay?: number;
    };
}
/**
 * Base model of all display options model children
 *
 * Type : DB model (bots/{botId}/channels/web/displayOptions)
 * Representation : Children models
 */
export interface DisplayOption {
    key: DisplayOptionName;
    active: boolean;
    values: {
        [option: string]: string | number | boolean;
    };
}
/**
 * Logo settings model
 *
 * Type : DB model (bots/{botId}/channels/web/displayOptions/logo)
 * Representation : Front, CF
 */
export interface LogoOption extends DisplayOption {
    active: boolean;
    key: 'logo';
    values: {
        url: string;
    };
}
/**
 * Background settings model
 *
 * Type : DB model (bots/{botId}/channels/web/displayOptions/background)
 * Representation : Front, CF
 */
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
/**
 * Icon settings model
 *
 * Type : DB model (bots/{botId}/channels/web/displayOptions/icon)
 * Representation : Front, CF
 */
export interface IconOption extends DisplayOption {
    active: boolean;
    key: 'icon';
    values: {
        url: string;
    };
}
/**
 * Colors settings model
 *
 * Type : DB model (bots/{botId}/channels/web/displayOptions/colors)
 * Representation : Front, CF
 */
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
/**
 * Chat settings model
 *
 * Type : DB model (bots/{botId}/channels/web/displayOptions/chat)
 * Representation : Front, CF
 */
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
        botTypingVisual: BotTypingBehavior;
        showMessageDate: boolean;
        showMessageRead: boolean;
        setInactiveAfter: number;
        no_branding: boolean;
        layout: LayoutSize;
        nodesLayout: LayoutSize;
        useNotificationSound: boolean;
        sendButtonAppearance: SendButtonAppearance;
        sendButtonText: string;
    };
}
/**
 * Vocal settings model
 *
 * Type : DB model (bots/{botId}/channels/web/displayOptions/vocal)
 * Representation : Front, CF
 */
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
/**
 * Integration settings model
 * ### NUTD
 *
 * Type : DB model (bots/{botId}/channels/web/integration)
 * Representation : Front, CF
 */
export interface WebIntegration {
    useAltId: boolean;
    keepOpen: boolean;
    autoLoad: boolean;
    lgBreakPoint: number;
    lgFullScreen: boolean;
    marginHoriz: number;
    marginVert: number;
    marginVertMiddle: number;
    marginVertTop: number;
    iconSize: number;
    iconElementSize: number;
    iframeHeight: number;
    iframeWidth: number;
    mdFullScreen: boolean;
    mdMarginHoriz: number;
    mdMarginVert: number;
    mdMarginVertMiddle: number;
    mdMarginVertTop: number;
    mdIconSize: number;
    mdIconElementSize: number;
    mdIframeHeight: number;
    mdIframeWidth: number;
    smBreakPoint: number;
    smMarginHoriz: number;
    smMarginVert: number;
    smMarginVertMiddle: number;
    smIconSize: number;
    position: string;
    borderSize: number;
    borderColor: string;
    shadowSize: number;
    shadowColor: string;
    fontFamily: string;
    iconImgUrl: string;
    iconBorderRadius: number;
    iconBgColor: string;
    iconTextColor: string;
    iframeBorderRadius: number;
    iframeBgImage: string;
    iframeBgPosition: string;
    closeButtonColor: string;
    closeButtonSize: number;
    ctaActive: boolean;
    ctaBorderRadius: number;
    ctaTextColor: string;
    ctaBgColor: string;
    ctaText: string;
    fadeInDelay: number;
    loadOpen: boolean;
    menuActive: boolean;
    menuMargin: number;
    menuBorderRadius: number;
    menuBgColor: string;
    menuLogoUrl: string;
    menuLogoSize: number;
    menuTextColor: string;
    menuTitleSize: number;
    menuLogoTitleMargin: number;
    menuTitleDescMargin: number;
    menuDescButtonMargin: number;
    menuBtnBgColor: string;
    menuBtnWidth: number;
    menuBtnHeight: number;
    menuBtnRadius: number;
    menuBtnTextColor: string;
    menuBtnBorderSize: number;
    menuBtnBorderColor: string;
    menuBtnShadowColor: string;
    menuBtnShadowSize: number;
    menuTitle: string;
    menuDescription: string;
    menuStart: string;
    menuResume: string;
}
/**
 * Parameters settings model
 *
 * Type : DB model (bots/{botId}/channels/web/parameters)
 * Representation : Front, Back, CF
 */
export interface WebParams {
    [paramId: string]: WebParam;
}
export interface WebParam {
    id: string;
    isAlternativeId: boolean;
    key: string;
}
/**
 * Menu settings model
 *
 * Type : DB model (bots/{botId}/channels/web/menu)
 * Representation : Front, CF
 */
export interface WebMenu {
    active: boolean;
    options: {
        alwaysVisible: boolean;
        buttons: ButtonElement[];
    };
}
/**
 * Share settings model
 *
 * Type : DB model (bots/{botId}/channels/web/share)
 * Representation : Front, CF
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
/**
 * Data transfers settings model
 *
 * Type : DB model (bots/{botId}/channels/web/dataTransfers)
 * Representation : Front, CF
 */
export interface DataTransferOrders {
    [settingId: string]: DataTransferOrder;
}
/**
 * Individual data transfer settings model
 *
 * Type : DB model (bots/{botId}/channels/web/dataTransfers/{transferId})
 * Representation : Front, CF
 */
export interface DataTransferOrder {
    id: string;
    sourceType: 'cookie' | 'variable' | 'localStorage';
    source: string;
    target: string;
}
/**
 * Extended Layout options
 * Used in the front app to define additional settings
 * in order to display the bot properly
 *
 * Type : app model
 * Representation : Front (edition, testing, cockpit)
 */
export interface LayoutOptions {
    framed: boolean;
    context: DisplayContext;
    inverted: boolean;
}
