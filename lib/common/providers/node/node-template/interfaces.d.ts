import { ButtonElement, GenericElement, QuickReplyElement } from './entities';
import { ButtonLoginService, ButtonUrlWebviewType, LayoutSize, TemplateButtonType, TemplateFeedType } from './types';
import { DataOperation } from '../entities';
export interface QuickRepliesAutoOptions {
    listKey?: string;
    title?: string;
    imageUrl?: string;
    targetNode?: string;
    fallbackNode?: string;
    operations?: DataOperation[];
}
export interface TemplateQuickRepliesBase {
    feedType: TemplateFeedType;
    text: string;
}
export declare type TemplateQuickRepliesAuto = TemplateQuickRepliesBase & {
    autoOptions?: QuickRepliesAutoOptions;
};
export declare type TemplateQuickRepliesManual = TemplateQuickRepliesBase & {
    quickReplies?: QuickReplyElement[];
};
/**
 * This model is declared for type construction only
 */
interface ButtonElementBase {
    type: TemplateButtonType;
    title?: string;
}
/**
 * type must be 'postback'
 */
export declare type ButtonElementPostback = ButtonElementBase & {
    targetNode?: string;
    operations?: DataOperation[];
};
/**
 * type must be 'url'
 */
export declare type ButtonElementUrl = ButtonElementBase & {
    url?: string;
    openNewTab?: boolean;
    messengerExtensions?: boolean;
    webviewHeightRatio?: ButtonUrlWebviewType;
};
/**
 * type must be 'login'
 */
export declare type ButtonElementLogin = ButtonElementBase & {
    service?: ButtonLoginService;
    targetNodeLoginSuccess?: string;
    targetNodeLoginFailure?: string;
    dataProfileKey?: string;
};
/**
 * type must be 'call'
 */
export declare type ButtonElementCall = ButtonElementBase & {
    phoneNumber?: number;
};
/**
 * type must be 'share'
 */
export declare type ButtonElementShare = ButtonElementBase;
export interface GenericAutoOptions {
    listKey: string;
    title?: string;
    subtitle?: string;
    picture?: string;
    fallbackNode?: string;
    defaultAction?: ButtonElement;
    buttons?: ButtonElement[];
}
export interface TemplateGenericManual {
    elements?: GenericElement[];
}
export interface TemplateGenericAuto {
    autoOptions?: GenericAutoOptions;
}
export interface TemplateListBase {
    feedType: TemplateFeedType;
    intro?: string;
    buttons?: ButtonElement[];
}
export declare type TemplateListAuto = TemplateListBase & TemplateGenericAuto;
export declare type TemplateListManual = TemplateListBase & TemplateGenericManual;
export interface TemplateCarrouselBase {
    feedType: TemplateFeedType;
    intro?: string;
    size?: LayoutSize;
}
export declare type TemplateCarrouselAuto = TemplateCarrouselBase & TemplateGenericAuto;
export declare type TemplateCarrouselManual = TemplateCarrouselBase & TemplateGenericManual;
export interface ReceiptAddress {
    street1?: string;
    street2?: string;
    city?: string;
    postalCode?: string;
    state?: string;
    country?: string;
}
export {};
