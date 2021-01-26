import { ButtonElementCall, ButtonElementLogin, ButtonElementPostback, ButtonElementShare, ButtonElementUrl, DataBoundedOperationOptions, DataComposedOperationOptions, DataSearchOperationOptions, TemplateButtons, TemplateGenericAuto, TemplateGenericManual, TemplateMedia, TemplateOpenGraph, TemplateQuickRepliesAuto, TemplateQuickRepliesManual, TemplateReceipt, TemplateText } from './interfaces';
export declare type TemplateType = 'text' | 'quick-replies' | 'button' | 'media' | 'list' | 'generic' | 'receipt' | 'open-graph';
export declare type Template = TemplateText | TemplateQuickReplies | TemplateButtons | TemplateMedia | TemplateList | TemplateCarrousel | TemplateReceipt | TemplateOpenGraph;
export declare type TemplateFeedType = 'manual' | 'auto';
export declare type LayoutSize = 'small' | 'medium' | 'tall';
export declare type QuickReplyContentType = 'text' | 'location';
export declare type TemplateQuickReplies = {
    text: string;
} & (TemplateQuickRepliesManual | TemplateQuickRepliesAuto);
export declare type TemplateButtonType = 'postback' | 'url' | 'login' | 'call' | 'share';
export declare type TemplateDefaultActionType = 'postback' | 'url';
export declare type ButtonElement = ButtonElementPostback | ButtonElementUrl | ButtonElementLogin | ButtonElementCall | ButtonElementShare;
export declare type ButtonUrlWebviewType = 'tall' | 'compact' | 'full';
export declare type ButtonLoginService = 'google' | 'facebook';
export declare type MediaType = 'image' | 'video' | 'audio' | 'map' | 'calendar';
export declare type TemplateListManual = {
    intro?: string;
    buttons?: ButtonElement[];
} & TemplateGenericManual;
export declare type TemplateList = {
    intro?: string;
    buttons?: ButtonElement[];
} & (TemplateGenericManual | TemplateGenericAuto);
export declare type TemplateCarrouselManual = {
    intro?: string;
    size?: LayoutSize;
} & TemplateGenericManual;
export declare type TemplateCarrousel = {
    intro?: string;
    size?: LayoutSize;
} & (TemplateGenericManual | TemplateGenericAuto);
export declare type MappingType = 'data-input' | 'go-to-node' | 'switch';
export declare type FormatCheckType = 'none' | 'email' | 'phone' | 'date' | 'number' | 'custom' | 'country' | 'nationality';
export declare type DateInput = 'dd-mm-yyyy' | 'mm-dd-yyyy';
export declare type DateOutput = 'asInput' | 'timestamp' | 'iso8601' | 'fullIso8601' | 'yyyymmdd' | DateInput;
export declare type FallbackType = 'go-to-node' | 'message' | 'ai';
export declare type RequestType = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
export declare type BodyType = 'XML' | 'JSON' | 'TEXT';
export declare type OptionBehaviorType = 'message' | 'api';
export declare type OperationType = 'set' | 'delete' | 'erase' | 'dateNow' | 'concatenate' | 'split' | 'replace' | 'match' | 'toString' | 'toUpperCase' | 'toLowerCase' | 'stringify' | 'add' | 'remove' | 'divide' | 'multiply' | 'random' | 'round' | 'maximum' | 'minimum' | 'formula' | 'toNumber' | 'push' | 'slice' | 'find' | 'filter' | 'sort' | 'invertedSort' | 'join' | 'get' | 'merge' | 'parse' | 'conditional';
export declare type OperationOptions = DataBoundedOperationOptions | DataComposedOperationOptions | DataSearchOperationOptions;
export declare type ComparisonType = '!' | '.!' | '==' | '<>' | '<' | '<=' | '>' | '>=' | '^$';
export declare type ComparisonActionType = 'exit' | 'next';
