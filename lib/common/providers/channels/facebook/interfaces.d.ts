import { PersistentMenuButtonType, PersistentMenuWebviewType, TargetAudienceType } from './types';
export interface PageSummary {
    id: string;
    name: string;
    access_token: string;
    category: string;
    category_list: {
        id: string;
        name: string;
    }[];
    tasks: string[];
}
export interface Page {
    id: string;
    name: string;
    picture: {
        data: {
            url: string;
        };
    };
}
export interface AccountLinkingUrl {
    account_linking_url: string;
}
export interface GetStarted {
    payload: string;
}
export interface GreetingLocaleItem {
    locale: string;
    text: string;
}
export interface HomeUrl {
    url: string;
    webview_height_ratio: 'tall';
    webview_share_button: 'show' | 'hide';
    in_test: false;
}
export interface PersistentMenuItem {
    locale: 'default';
    composer_input_disabled: boolean;
    call_to_actions: PersistentMenuButton[];
}
export interface TargetAudience {
    audience_type: TargetAudienceType;
    countries?: {
        whitelist?: string[];
        blacklist?: string[];
    };
}
/**
 * Facebook buttons
 */
export interface PersistentMenuButton extends FacebookPostbackButton, FacebookUrlButton {
    type: PersistentMenuButtonType;
    title: string;
    messenger_extensions?: boolean;
    payload?: string;
    url?: string;
    webview_height_ratio?: PersistentMenuWebviewType;
}
export interface FacebookPostbackButton {
    type: PersistentMenuButtonType;
    title: string;
    payload?: string;
}
export interface FacebookUrlButton {
    type: PersistentMenuButtonType;
    title: string;
    url?: string;
    webview_height_ratio?: PersistentMenuWebviewType;
}
export interface Property {
    key: string;
    name: string;
    template: any;
}
