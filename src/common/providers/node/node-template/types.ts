import {
  TemplateButtons,
  TemplateCarrousel,
  TemplateList,
  TemplateMedia,
  TemplateOpenGraph,
  TemplateQuickReplies,
  TemplateReceipt,
  TemplateText
} from './entities';

import { MediaAttachmentType } from '../../request/types';

export type TemplateType =
  | 'text'
  | 'quick-replies'
  | 'button'
  | 'media'
  | 'list'
  | 'generic'
  | 'receipt'
  | 'open-graph';

export type Template =
  | TemplateText
  | TemplateQuickReplies
  | TemplateButtons
  | TemplateMedia
  | TemplateList
  | TemplateCarrousel
  | TemplateReceipt
  | TemplateOpenGraph;

export type TemplateFeedType = 'manual' | 'auto';

export type LayoutSize = 'small' | 'medium' | 'tall';

export type QuickReplyContentType = 'text' | 'location';

export type TemplateButtonType = 'postback' | 'url' | 'login' | 'call' | 'share';

export type TemplateDefaultActionType = 'postback' | 'url';

export type ButtonUrlWebviewType = 'tall' | 'compact' | 'full';

// !! Must be updated along with OauthService type
export type ButtonLoginService = 'google' | 'facebook';

export type MediaType = MediaAttachmentType | 'map' | 'calendar';
