import { GreetingLocaleItem, PersistentMenuItem } from './interfaces';
export declare type Greeting = GreetingLocaleItem[];
export declare type MessengerProfileKey = 'account_linking_url' | 'get_started' | 'greeting' | 'home_url' | 'persistent_menu' | 'target_audience' | 'whitelisted_domains' | 'payment_settings';
export declare type PersistentMenu = PersistentMenuItem[];
export declare type PersistentMenuButtonType = 'postback' | 'web_url';
export declare type PersistentMenuWebviewType = 'compact' | 'tall' | 'full';
export declare type TargetAudienceType = 'all' | 'none' | 'custom';
export declare type TargetAudienceCustomType = 'blacklist' | 'whitelist';
export declare type WhitelistedDomains = string[];
