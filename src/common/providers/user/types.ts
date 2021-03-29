export type UserStatus = 'super_admin' | 'admin';

export type UserRole = 'super_admin' | 'owner' | 'contributor' | 'support';

export type AvailableLang = 'fr' | 'en';

export type UserAction =
  | 'connectAutoReply'
  | 'connectPage'
  | 'connectSlack'
  | 'createBot'
  | 'deleteBot'
  | 'deployBot'
  | 'disconnectAutoReply'
  | 'disconnectPage'
  | 'duplicateBot'
  | 'exportLexicon'
  | 'getServiceDiff'
  | 'getServiceEntities'
  | 'getServiceIntents'
  | 'importLexicon'
  | 'isWorkplaceAppSubscribed'
  | 'subscribeWorkplaceApp'
  | 'undeployBot'
  | 'updateBotUsers'
  | 'updateLexiconCredentials'
  | 'updateNbNodes';
