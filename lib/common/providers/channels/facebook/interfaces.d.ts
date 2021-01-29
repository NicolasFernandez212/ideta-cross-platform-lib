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
export interface ProfileAccountLinkingUrl {
    account_linking_url: string;
}
export interface ProfileGetStarted {
    get_started: {
        payload: string;
    };
}
export interface ProfileGreeting {
    greeting: {
        locale: string;
        text: string;
    }[];
}
export interface ProfileHomeUrl {
    home_url: {
        url: string;
        webview_height_ratio: 'tall';
        webview_share_button: 'show' | 'hide';
        in_test: boolean;
    };
}
export interface ProfilePersistentMenu {
    persistent_menu: {
        locale: string;
        composer_input_disabled: boolean;
        call_to_actions: FacebookButton[];
    };
}
export declare type FacebookButton = FacebookPostbackButton | FacebookUrlButton;
export interface FacebookPostbackButton {
    type: 'postback';
    title: string;
    payload: string;
}
export interface FacebookUrlButton {
    type: 'web_url';
    title: string;
    url: string;
    webview_height_ratio: 'compact' | 'tall' | 'full';
}
export interface Property {
    key: string;
    name: string;
    template: any;
}
