"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const lodash_1 = require("lodash");
class User {
    constructor(user) {
        if (user) {
            if (user.id)
                this.id = user.id;
            if (user.avatarUrl)
                this.avatarUrl = user.avatarUrl;
            if (user.customer)
                this.customer = user.customer;
            if (user.email)
                this.email = user.email;
            if (user.facebook)
                this.facebook = user.facebook;
            if (user.firstname)
                this.firstname = user.firstname;
            if (user.lastname)
                this.lastname = user.lastname;
            if (user.status)
                this.status = user.status;
            this.bots = user.bots || {};
            this.lang = user.lang || 'en';
            this.plans = user.plans || {};
            this.settings = user.settings || {};
        }
    }
    can(action, botId) {
        const isOwner = lodash_1.get(this, `bots.${botId}.role`) === 'owner';
        switch (action) {
            case 'createBot':
            case 'connectAutoReply':
            case 'disconnectAutoReply':
                // User is authenticated
                return true;
            case 'connectPage':
            case 'connectSlack':
            case 'deployBot':
            case 'disconnectPage':
            case 'exportLexicon':
            case 'getServiceDiff':
            case 'getServiceEntities':
            case 'getServiceIntents':
            case 'importLexicon':
            case 'isWorkplaceAppSubscribed':
            case 'subscribeWorkplaceApp':
            case 'undeployBot':
            case 'updateNbNodes':
                return !!(this.bots && this.bots[botId]); // One of user's bots
            case 'deleteBot':
            case 'duplicateBot':
            case 'updateBotUsers':
            case 'updateLexiconCredentials':
                return this.status !== 'admin' || isOwner;
            default:
                return false;
        }
    }
}
exports.User = User;
