import { GreetingLocaleItem, PersistentMenuItem } from './interfaces';

export type Greeting = GreetingLocaleItem[];

export type MessengerProfileKey =
  | 'account_linking_url'
  | 'get_started'
  | 'greeting'
  | 'home_url' // no longer supported by facebook
  | 'persistent_menu' // no longer supported by facebook
  | 'target_audience'
  | 'whitelisted_domains'
  | 'payment_settings';

export type PersistentMenu = PersistentMenuItem[];

export type PersistentMenuButtonType = 'postback' | 'web_url';

export type PersistentMenuWebviewType = 'compact' | 'tall' | 'full';

export type TargetAudienceType = 'all' | 'none' | 'custom';

export type TargetAudienceCustomType = 'blacklist' | 'whitelist';

export type WhitelistedDomains = string[];
