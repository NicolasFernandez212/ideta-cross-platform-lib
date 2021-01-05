// import { DataStore } from "./bot-data/bot-data.types";
// import { MappingOptions, NlpOptions, AsyncAction } from "../node/node.types";
// import { BotBilling } from "../billing/bot-billing.model";
// import { UserRoleObject } from "../user/user.types";

// export class Bot {
//   public billing: BotBilling;
//   public channels: {
//     [channel in DeployableChannels]: {
//       status: "deployed" | "deploying" | "undeploying" | "error";
//       statusError: string;
//       deployedAt: Date;
//     };
//   };
//   public conversationKeepAlives: ConversationKeepAlive[];
//   public createdAt: Date;
//   public createdBy: string;
//   public dataStore: any;
//   public defaultMappingOptions: {
//     behaviorMedia: { active: boolean; options?: any };
//     behaviorGeoloc: { active: boolean; options?: any };
//   };
//   public emailWatermark: any;
//   public endPointBack: string;
//   public globalIntents: any;
//   public globalNlpStorage: any;
//   public id?: string;
//   public name: string;
//   public nbNodes: number;
//   public nlpServices: { [service in NlpService]: ServiceInfos };
//   public oauthServices: {
//     [service in OAuthService]: {
//       isAvailable: boolean;
//     };
//   };
//   public templateSettings: any;
//   public token: string;
//   public updatedAt: Date;
//   public useChannelDataStore: boolean; // uses data-stores from channel or only from sandbox
//   public useMap: boolean; // uses map system
//   public users: { [id: string]: UserEntry };

//   // get ownerId(): string {
//   //   return Object.keys(this.users).find((userId: string) => this.users[userId].role === 'owner');
//   // }

//   constructor(bot: any) {
//     if (bot.id) this.id = bot.id;
//     this.billing = new BotBilling(bot.billing || {});
//     this.channels = bot.channels || {};
//     this.conversationKeepAlives = bot.conversationKeepAlives || [];
//     this.createdAt = bot.createdAt;
//     this.createdBy = bot.createdBy;
//     this.dataStore = bot.dataStore || {};
//     this.defaultMappingOptions = bot.defaultMappingOptions || {};
//     this.emailWatermark = bot.emailWatermark || {};
//     this.endPointBack = bot.endPointBack || "";
//     this.globalIntents = bot.globalIntents || {};
//     this.globalNlpStorage = bot.globalNlpStorage || {};
//     this.name = bot.name || "";
//     this.nbNodes = bot.nbNodes || 0;
//     this.nlpServices = bot.nlpServices || {};
//     this.oauthServices = bot.oauthServices || {};
//     this.token = bot.token || randomBytes(32).toString("hex");
//     this.useChannelDataStore =
//       typeof bot.useChannelDataStore === "boolean"
//         ? bot.useChannelDataStore
//         : true;
//     this.useMap = bot.useMap || false;
//     this.users = bot.users || {};
//   }
// }

// export interface Bot {
//   id: string;
//   name: string;
//   createdAt: Date;
//   createdBy: string;
//   updatedAt: Date;
//   endPointBack: string;
//   nbNodes: number;
//   users: { [id: string]: UserRoleObject };
//   conversationKeepAlives: ConversationKeepAlive[];
//   defaultMappingOptions: MappingOptions;
//   dataStore: DataStore;
//   globalIntents: NlpOptions;
//   emailWatermark: EmailWatermark;
//   channels?: { [channel in Channel]: ChannelInfos };
//   nlpServices?: { [service in NlpService]: NlpServiceInfos };
//   oauthServices?: { [service in OAuthService]: OAuthServiceInfos };
//   billing?: BotBilling;
//   token: string;
//   // used to kown if a bot should only use
//   // sandbox dataStore or each channels dataStore
//   useChannelDataStore?: boolean;
//   // used to know if a bot should use the map system
//   useMap?: boolean;
//   useAutoConnect?: boolean;
//   templateSettings?: BotTemplateSettings;
// }

// /*
//  * Channels
//  */

// export type Channel =
//   | "sandbox"
//   | "web"
//   | "facebook"
//   | "google"
//   | "smooch"
//   | "workplace"
//   | "twilio";

// export interface ChannelInfos {
//   usersCount: number;
//   conversations: number;
//   deployedAt?: Date;
//   status?: "deployed" | "deploying" | "undeploying" | "error";
//   statusError?: string;
// }

// /*
//  * NLP
//  */

// export type NlpService = "dialogflow" | "luis";

// export type NlpServiceStatus =
//   | "importing"
//   | "imported"
//   | "exporting"
//   | "exported"
//   | "error";

// export interface NlpServiceInfos {
//   status: NlpServiceStatus;
//   statusError: string;
//   importedAt?: Date;
//   exportedAt?: Date;
// }

// /*
//  * OAuth
//  */

// export type OAuthService = "google" | "facebook";

// export interface OAuthServiceInfos {
//   clientId: string;
//   clientSecret: string;
// }

// export interface ConversationKeepAlive {
//   delay: number; // Time in minutes
//   message: string;
//   backgroundActions: AsyncAction[];
// }

// export interface EmailWatermark {
//   image: string;
//   imageSize: string;
// }

// export interface BotTemplateSettings {
//   creationBotId?: string;
//   id: string;
//   image: string;
//   lang?: string;
//   redirection: string;
//   useCreationBot?: boolean;
//   title: string;
//   url?: string;
// }

export class CrossBotInterface {
  id: string;
  name: string;
}
