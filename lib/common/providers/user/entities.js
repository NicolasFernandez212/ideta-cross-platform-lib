"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const lodash_1 = require("lodash");
class User {
    constructor(user) {
        if (user) {
            this.id = user.id;
            this.avatarUrl = user.avatarUrl;
            this.bots = user.bots || {};
            this.customer = user.customer;
            this.email = user.email;
            this.facebook = user.facebook;
            this.firstname = user.firstname;
            this.lang = user.lang || 'en';
            this.lastname = user.lastname;
            this.plans = user.plans || {};
            this.settings = user.settings || {};
            this.status = user.status;
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
