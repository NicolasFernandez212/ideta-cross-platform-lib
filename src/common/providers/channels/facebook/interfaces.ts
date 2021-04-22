import { PersistentMenuButtonType, PersistentMenuWebviewType, TargetAudienceType } from './types';

/*
 * Pages
 */

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

/*
 * Messenger Profile
 */

export interface AccountLinkingUrl {
  account_linking_url: string;
}

export interface GetStarted {
  payload: string; // Stringified JSON
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
  composer_input_disabled: boolean; // Used to hide user text input
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
  /* Must be true if the item type is web_url and the Messenger Extensions SDK
   * will be used in the webview
   */
  messenger_extensions?: boolean;
  // Inherited from FacebookPostbackButton
  payload?: string;
  // Inherited from FacebookUrlButton
  url?: string;
  webview_height_ratio?: PersistentMenuWebviewType;
}

export interface FacebookPostbackButton {
  type: PersistentMenuButtonType; // as 'postback'
  title: string;
  /* Data that will be sent back to your webhook as a messaging_postbacks event.
   * Required if type is postback. 1000 character limit
   */
  payload?: string;
}

export interface FacebookUrlButton {
  type: PersistentMenuButtonType; // 'web_url'
  title: string;
  /* URL to open when the button is tapped. Required if type is web_url */
  url?: string;
  /* Height of the webview */
  webview_height_ratio?: PersistentMenuWebviewType;
}

export interface Property {
  key: string;
  name: string;
  template: any;
}
