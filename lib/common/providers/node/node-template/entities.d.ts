import { ButtonLoginService, ButtonUrlWebviewType, LayoutSize, MediaType, QuickReplyContentType, TemplateButtonType, TemplateFeedType, TemplateType } from './types';
import { ButtonElementPostback, ButtonElementUrl, ButtonElementLogin, ButtonElementCall, ButtonElementShare, GenericAutoOptions, QuickRepliesAutoOptions, ReceiptAddress, TemplateQuickRepliesAuto, TemplateQuickRepliesManual, TemplateCarrouselAuto, TemplateCarrouselManual, TemplateListAuto, TemplateListManual } from './interfaces';
import { DataOperation } from '../entities';
export declare class TemplateText {
    text: string;
    constructor(template?: any);
}
export declare class QuickReplyElement {
    contentType: QuickReplyContentType;
    title?: string | number;
    targetNode?: string;
    imageUrl?: string;
    operations?: DataOperation[];
    constructor(element?: any);
}
export declare class TemplateQuickReplies implements TemplateQuickRepliesAuto, TemplateQuickRepliesManual {
    feedType: TemplateFeedType;
    text: string;
    autoOptions?: QuickRepliesAutoOptions;
    quickReplies?: QuickReplyElement[];
    constructor(template?: any);
}
export declare class ButtonElement implements ButtonElementPostback, ButtonElementUrl, ButtonElementLogin, ButtonElementCall, ButtonElementShare {
    type: TemplateButtonType;
    title?: string;
    targetNode?: string;
    operations?: DataOperation[];
    url?: string;
    openNewTab?: boolean;
    messengerExtensions?: boolean;
    webviewHeightRatio?: ButtonUrlWebviewType;
    service?: ButtonLoginService;
    targetNodeLoginSuccess?: string;
    targetNodeLoginFailure?: string;
    dataProfileKey?: string;
    phoneNumber?: number;
    constructor(element?: any);
}
export declare class TemplateButtons {
    text: string;
    buttons: ButtonElement[];
    constructor(template: any);
}
export declare class MediaElement {
    mediaType: MediaType;
    url?: string;
    buttons?: ButtonElement[];
    constructor(element?: any);
}
export declare class TemplateMedia {
    intro?: string;
    elements: MediaElement[];
    constructor(template?: any);
}
export declare class GenericElement {
    title: string;
    subtitle?: string;
    imageUrl?: string;
    defaultAction?: ButtonElement;
    buttons?: ButtonElement[];
    constructor(element?: any);
}
export declare class TemplateCarrousel implements TemplateCarrouselAuto, TemplateCarrouselManual {
    feedType: TemplateFeedType;
    intro?: string;
    size?: LayoutSize;
    autoOptions?: GenericAutoOptions;
    elements?: GenericElement[];
    constructor(template?: any);
}
export declare class TemplateList implements TemplateListAuto, TemplateListManual {
    feedType: TemplateFeedType;
    intro?: string;
    buttons?: ButtonElement[];
    autoOptions?: GenericAutoOptions;
    elements?: GenericElement[];
    constructor(template?: any);
}
export declare class ReceiptElement {
    title: string;
    price: number;
    subtitle?: string;
    quantity?: number;
    currency?: string;
    imageUrl?: string;
    constructor(element?: any);
}
export declare class TemplateReceipt {
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
    constructor(template?: any);
}
export declare class OpenGraphElement {
    url: string;
    buttons?: ButtonElement[];
    constructor(element?: any);
}
export declare class TemplateOpenGraph {
    elements: OpenGraphElement[];
    constructor(template?: any);
}
export declare class NodeTemplate {
    type: TemplateType;
    templateText?: TemplateText;
    templateQuickReplies?: TemplateQuickReplies;
    templateButton?: TemplateButtons;
    templateMedia?: TemplateMedia;
    templateList?: TemplateList;
    templateGeneric?: TemplateCarrousel;
    templateReceipt?: TemplateReceipt;
    templateOpenGraph?: TemplateOpenGraph;
    parsedTemplate?: any;
    constructor(template: any);
}
