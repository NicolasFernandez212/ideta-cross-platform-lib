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
                // User is authenticated
                return true;
            case 'deployBot':
            case 'undeployBot':
            case 'updateNbNodes':
            case 'getServiceIntents':
            case 'getServiceEntities':
            case 'getServiceDiff':
            case 'importLexicon':
            case 'exportLexicon':
            case 'connectPage':
            case 'connectSlack':
            case 'disconnectPage':
            case 'isWorkplaceAppSubscribed':
            case 'subscribeWorkplaceApp':
            case 'fetchAgents':
                return !!(this.bots && this.bots[botId]); // One of user's bots
            case 'duplicateBot':
            case 'deleteBot':
            case 'updateLexiconCredentials':
            case 'updateBotUsers':
                return this.status !== 'admin' || isOwner;
            default:
                return false;
        }
    }
}
exports.User = User;
