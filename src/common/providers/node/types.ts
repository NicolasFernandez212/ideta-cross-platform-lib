import {
  ButtonElementCall,
  ButtonElementLogin,
  ButtonElementPostback,
  ButtonElementShare,
  ButtonElementUrl,
  DataBoundedOperationOptions,
  DataComposedOperationOptions,
  DataSearchOperationOptions,
  TemplateButtons,
  TemplateGenericAuto,
  TemplateGenericManual,
  TemplateMedia,
  TemplateOpenGraph,
  TemplateQuickRepliesAuto,
  TemplateQuickRepliesManual,
  TemplateReceipt,
  TemplateText,
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

export type ButtonElement =
  | ButtonElementPostback
  | ButtonElementUrl
  | ButtonElementLogin
  | ButtonElementCall
  | ButtonElementShare;

export type ButtonUrlWebviewType = 'tall' | 'compact' | 'full';

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

export type MappingType = 'data-input' | 'go-to-node' | 'switch';

export type FormatCheckType = 'none' | 'email' | 'phone' | 'date' | 'number' | 'custom' | 'country' | 'nationality';

export type DateDisplay = 'asInput' | 'dd/mm/yyyy' | 'mm/dd/yyyy' | 'yyyy/mm/dd';

export type DateInput = 'dd-mm-yyyy' | 'mm-dd-yyyy';

export type DateOutput = DateDisplay | DateInput | 'timestamp' | 'iso8601' | 'fullIso8601' | 'yyyymmdd';

export type FallbackType = 'go-to-node' | 'message' | 'ai';

export type RequestType = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type BodyType = 'XML' | 'JSON' | 'TEXT';

export type OptionBehaviorType = 'message' | 'api';

export type OperationType =
  // general operations
  | 'set'
  | 'delete'
  | 'erase'
  | 'dateNow'
  // string operations
  | 'concatenate'
  | 'split'
  | 'replace'
  | 'match'
  | 'toString'
  | 'toUpperCase'
  | 'toLowerCase'
  | 'stringify'
  // number operations
  | 'add'
  | 'remove'
  | 'divide'
  | 'multiply'
  | 'random'
  | 'round'
  | 'maximum'
  | 'minimum'
  | 'formula'
  | 'toNumber'
  // array operations
  | 'push'
  | 'slice'
  | 'find'
  | 'filter'
  | 'sort'
  | 'invertedSort'
  | 'join'
  // object operations
  | 'get'
  | 'merge'
  // misc operations
  | 'parse'
  | 'conditional';

export type OperationOptions = DataBoundedOperationOptions | DataComposedOperationOptions | DataSearchOperationOptions;

export type ComparisonType = '!' | '.!' | '==' | '<>' | '<' | '<=' | '>' | '>=' | '^$';

export type ComparisonActionType = 'exit' | 'next';
