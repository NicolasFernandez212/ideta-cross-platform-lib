import { ButtonLoginService, ButtonUrlWebviewType, MediaType, QuickReplyContentType, TemplateButtonType, TemplateCarrousel, TemplateList, TemplateQuickReplies, TemplateType } from './types';
import { DataOperation } from '../interfaces';
export interface NodeTemplate {
    type: TemplateType;
    templateText?: TemplateText;
    templateQuickReplies?: TemplateQuickReplies;
    templateButton?: TemplateButtons;
    templateMedia?: TemplateMedia;
    templateList?: TemplateList;
    templateGeneric?: TemplateCarrousel;
    templateReceipt?: TemplateReceipt;
    templateOpenGraph?: TemplateOpenGraph;
}
export interface TemplateText {
    text: string;
}
export interface TemplateQuickRepliesManual {
    feedType: 'manual';
    quickReplies: QuickReplyElement[];
}
export interface TemplateQuickRepliesAuto {
    feedType: 'auto';
    autoOptions: QuickRepliesAutoOptions;
}
export interface QuickRepliesAutoOptions {
    listKey?: string;
    title?: string;
    imageUrl?: string;
    targetNode?: string;
    fallbackNode?: string;
    operations?: DataOperation[];
}
export interface QuickReplyElement {
    contentType: QuickReplyContentType;
    title?: string | number;
    targetNode?: string;
    imageUrl?: string;
    operations?: DataOperation[];
}
export interface TemplateButtons {
    text: string;
    buttons: ButtonElement[];
}
/**
 * This model is declared for type construction only
 */
interface ButtonElementBase {
    type: TemplateButtonType;
    title?: string;
}
export declare type ButtonElement = ButtonElementPostback & ButtonElementUrl & ButtonElementLogin & ButtonElementCall & ButtonElementShare;
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
export interface TemplateMedia {
    intro?: string;
    elements: MediaElement[];
}
export interface MediaElement {
    mediaType: MediaType;
    url?: string;
    buttons?: ButtonElement[];
}
export interface GenericElement {
    title: string;
    subtitle?: string;
    imageUrl?: string;
    defaultAction?: ButtonElement;
    buttons?: ButtonElement[];
}
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
    feedType: 'manual';
    elements: GenericElement[];
}
export interface TemplateGenericAuto {
    feedType: 'auto';
    autoOptions: GenericAutoOptions;
}
export interface TemplateReceipt {
    recipientName?: string;
    orderNumber?: string;
    currency?: string;
    paymentMethod?: string;
    orderUrl?: string;
    timestamp?: string;
    address?: ReceiptAddress;
    summary?: {
        totalCost?: number;
        subtotal?: number;
        shippingCost?: number;
        totalTax?: number;
    };
    adjustments?: {
        name?: string;
        amount?: number;
    }[];
    elements?: ReceiptElement[];
}
export interface ReceiptElement {
    title: string;
    subtitle?: string;
    quantity?: number;
    price: number;
    currency?: string;
    imageUrl?: string;
}
export interface ReceiptAddress {
    street1?: string;
    street2?: string;
    city?: string;
    postalCode?: string;
    state?: string;
    country?: string;
}
export interface TemplateOpenGraph {
    elements: OpenGraphElement[];
}
export interface OpenGraphElement {
    url: string;
    buttons: ButtonElement[];
}
export {};