import { ButtonElement, TemplateButtons, TemplateGenericAuto, TemplateGenericManual, TemplateMedia, TemplateOpenGraph, TemplateQuickRepliesAuto, TemplateQuickRepliesManual, TemplateReceipt, TemplateText } from './interfaces';
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
