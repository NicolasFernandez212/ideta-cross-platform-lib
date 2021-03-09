import { get } from 'lodash';

import { FacebookUserInfos, UserEntry } from './interfaces';
import { AvailableLang, UserStatus } from './types';

import { PlanId } from '../billing/types';

export class User {
  public id: string;
  public avatarUrl?: string;
  public bots: {
    [botId: string]: UserEntry;
  };
  public customer?: {
    id: string;
  };
  public email: string;
  public facebook?: FacebookUserInfos;
  public firstname?: string;
  public lang: AvailableLang;
  public lastname?: string;
  public plans: { [plan in PlanId]?: string[] };
  public settings?: any;
  public status?: UserStatus;

  constructor(user?: Partial<User>) {
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

  public can(action: string, botId: string): boolean {
    const isOwner = get(this, `bots.${botId}.role`) === 'owner';

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
