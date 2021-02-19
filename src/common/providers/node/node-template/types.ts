import {
  ButtonElement,
  TemplateButtons,
  TemplateGenericAuto,
  TemplateGenericManual,
  TemplateMedia,
  TemplateOpenGraph,
  TemplateQuickRepliesAuto,
  TemplateQuickRepliesManual,
  TemplateReceipt,
  TemplateText
} from './interfaces';

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

export type TemplateQuickReplies = {
  text: string;
} & (TemplateQuickRepliesManual | TemplateQuickRepliesAuto);

export type TemplateButtonType = 'postback' | 'url' | 'login' | 'call' | 'share';

export type TemplateDefaultActionType = 'postback' | 'url';

export type ButtonUrlWebviewType = 'tall' | 'compact' | 'full';

// !! Must be updated along with OauthService type
export type ButtonLoginService = 'google' | 'facebook';

export type MediaType = 'image' | 'video' | 'audio' | 'map' | 'calendar';

export type TemplateListManual = {
  intro?: string;
  buttons?: ButtonElement[];
} & TemplateGenericManual;

export type TemplateList = {
  intro?: string;
  buttons?: ButtonElement[];
} & (TemplateGenericManual | TemplateGenericAuto);

export type TemplateCarrouselManual = {
  intro?: string;
  size?: LayoutSize;
} & TemplateGenericManual;

export type TemplateCarrousel = {
  intro?: string;
  size?: LayoutSize;
} & (TemplateGenericManual | TemplateGenericAuto);
