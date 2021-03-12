"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bot = void 0;
const crypto_1 = require("crypto");
const entities_1 = require("../billing/entities");
/**
 * Bot model
 *
 * Type : DB model (bots/{botId})
 * Representation : Front, Back, CF
 */
class Bot {
    // get ownerId(): string {
    //   return Object.keys(this.users).find((userId: string) => this.users[userId].role === 'owner');
    // }
    constructor(bot) {
        if (bot.id)
            this.id = bot.id;
        this.billing = new entities_1.BotBilling(bot.billing || {});
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
        this.token = bot.token || crypto_1.randomBytes(32).toString('hex');
        this.useChannelDataStore = typeof bot.useChannelDataStore === 'boolean' ? bot.useChannelDataStore : true;
        this.useMap = bot.useMap || false;
        this.users = bot.users || {};
    }
}
exports.Bot = Bot;
