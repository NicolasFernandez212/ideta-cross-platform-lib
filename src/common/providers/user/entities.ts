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
      if (user.id) this.id = user.id;
      if (user.avatarUrl) this.avatarUrl = user.avatarUrl;
      if (user.customer) this.customer = user.customer;
      if (user.email) this.email = user.email;
      if (user.facebook) this.facebook = user.facebook;
      if (user.firstname) this.firstname = user.firstname;
      if (user.lastname) this.lastname = user.lastname;
      if (user.status) this.status = user.status;
      this.bots = user.bots || {};
      this.lang = user.lang || 'en';
      this.plans = user.plans || {};
      this.settings = user.settings || {};
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
