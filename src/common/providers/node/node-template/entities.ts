import {
  AuthorizedTypes,
  ButtonLoginService,
  ButtonUrlWebviewType,
  LayoutSize,
  MediaType,
  QuickReplyContentType,
  TemplateButtonType,
  TemplateFeedType
} from './types';
import {
  ButtonElementPostback,
  ButtonElementUrl,
  ButtonElementLogin,
  ButtonElementCall,
  ButtonElementShare,
  GenericAutoOptions,
  QuickRepliesAutoOptions,
  TemplateQuickRepliesAuto,
  TemplateQuickRepliesManual,
  TemplateCarrouselAuto,
  TemplateCarrouselManual,
  TemplateListAuto,
  TemplateListManual
} from './interfaces';

import { DataOperation } from '../entities';
import { Address } from '../../../../utils/utils';

/*
 * Text -----------------------------------------------------------------------
 */

export class TemplateText {
  public text: string;

  constructor(template?: any) {
    if (template) this.text = template.text;
  }
}

/*
 * Quick Replies --------------------------------------------------------------
 */

export class QuickReplyElement {
  public contentType: QuickReplyContentType;
  public title?: string | number;
  public targetNode?: string;
  public imageUrl?: string;
  public operations?: DataOperation[];

  constructor(element?: any) {
    if (element) {
      this.contentType = element.contentType;
      if (element.title) this.title = element.title;
      if (element.targetNode) this.targetNode = element.targetNode;
      if (element.imageUrl) this.imageUrl = element.imageUrl;
      if (element.operations) this.operations = element.operations;
    }
  }
}

export class TemplateQuickReplies implements TemplateQuickRepliesAuto, TemplateQuickRepliesManual {
  public feedType: TemplateFeedType;
  public text: string;
  // 'auto' feed type
  public autoOptions?: QuickRepliesAutoOptions;
  // 'manual' feed type
  public quickReplies?: QuickReplyElement[];

  constructor(template?: any) {
    if (template) {
      if (template.text) this.text = template.text;
      if (template.feedType) this.feedType = template.feedType;
      if (template.autoOptions) this.autoOptions = template.autoOptions;
      if (template.quickReplies) this.quickReplies = template.quickReplies;
    }
  }
}

/*
 * Buttons --------------------------------------------------------------------
 */

export class ButtonElement
  implements ButtonElementPostback, ButtonElementUrl, ButtonElementLogin, ButtonElementCall, ButtonElementShare {
  // Base properties and Share buttons
  public type: TemplateButtonType;
  public title?: string;
  // Postbacks buttons
  public targetNode?: string;
  public operations?: DataOperation[];
  // Url buttons
  public url?: string;
  public openNewTab?: boolean;
  public messengerExtensions?: boolean;
  public webviewHeightRatio?: ButtonUrlWebviewType;
  // Login buttons
  public service?: ButtonLoginService;
  public targetNodeLoginSuccess?: string;
  public targetNodeLoginFailure?: string;
  public dataProfileKey?: string;
  // Call buttons
  public phoneNumber?: number;

  constructor(element?: any) {
    if (element) {
      if (element.type) this.type = element.type;
      if (element.title) this.title = element.title;
      if (element.targetNode) this.targetNode = element.targetNode;
      if (element.operations) this.operations = element.operations;
      if (element.url) this.url = element.url;
      if (typeof element.openNewTab === 'boolean') this.openNewTab = element.openNewTab;
      if (typeof element.messengerExtensions === 'boolean') this.messengerExtensions = element.messengerExtensions;
      if (element.webviewHeightRatio) this.webviewHeightRatio = element.webviewHeightRatio;
      if (element.service) this.service = element.service;
      if (element.targetNodeLoginSuccess) this.targetNodeLoginSuccess = element.targetNodeLoginSuccess;
      if (element.targetNodeLoginFailure) this.targetNodeLoginFailure = element.targetNodeLoginFailure;
      if (element.dataProfileKey) this.dataProfileKey = element.dataProfileKey;
      if (element.phoneNumber) this.phoneNumber = element.phoneNumber;
    }
  }
}

export class TemplateButtons {
  public text: string;
  public buttons: ButtonElement[];

  constructor(template: any) {
    if (template) {
      if (template.text) this.text = template.text;
      if (template.buttons) {
        this.buttons = template.buttons.map((button: any) => new ButtonElement(button));
      }
    }
  }
}

/*
 * Media ----------------------------------------------------------------------
 */

export class MediaElement {
  public mediaType: MediaType;
  public url?: string;
  public buttons?: ButtonElement[];

  constructor(element?: any) {
    if (element) {
      this.mediaType = element.mediaType;
      if (element.url) this.url = element.url;
      if (element.buttons) this.buttons = element.buttons.map((button: any) => new ButtonElement(button));
    }
  }
}

export class TemplateMedia {
  public intro?: string;
  public elements: MediaElement[];

  constructor(template?: any) {
    if (template) {
      if (template.intro) this.intro = template.intro;
      this.elements = (template.elements || []).map((element: any) => new MediaElement(element));
    }
  }
}

/*
 * List & Carrousel -----------------------------------------------------------
 */

export class GenericElement {
  public title: string;
  public subtitle?: string;
  public imageUrl?: string;
  public defaultAction?: ButtonElement;
  public buttons?: ButtonElement[];

  constructor(element?: any) {
    if (element) {
      this.title = element.title;
      if (element.subtitle) this.subtitle = element.subtitle;
      if (element.imageUrl) this.imageUrl = element.imageUrl;
      if (element.defaultAction) this.defaultAction = new ButtonElement(element.defaultAction);
      if (element.buttons) {
        this.buttons = element.buttons.map((button: any) => new ButtonElement(button));
      }
    }
  }
}

export class TemplateCarrousel implements TemplateCarrouselAuto, TemplateCarrouselManual {
  public feedType: TemplateFeedType;
  public intro?: string;
  public size?: LayoutSize;
  // 'auto' feed type
  public autoOptions?: GenericAutoOptions;
  // 'manual' feed type
  public elements?: GenericElement[];

  constructor(template?: any) {
    if (template) {
      if (template.intro) this.intro = template.intro;
      if (template.size) this.size = template.size;
      if (template.feedType) this.feedType = template.feedType;
      if (template.autoOptions) this.autoOptions = template.autoOptions;
      if (template.elements) this.elements = template.elements;
    }
  }
}

export class TemplateList implements TemplateListAuto, TemplateListManual {
  public feedType: TemplateFeedType;
  public intro?: string;
  public buttons?: ButtonElement[];
  // 'auto' feed type
  public autoOptions?: GenericAutoOptions;
  // 'manual' feed type
  public elements?: GenericElement[];

  constructor(template?: any) {
    if (template) {
      this.feedType = template.feedType;
      if (template.intro) this.intro = template.intro;
      if (template.autoOptions) this.autoOptions = template.autoOptions;
      if (template.elements) this.elements = template.elements;
      if (template.buttons) this.buttons = template.buttons;
    }
  }
}

/*
 * Receipt --------------------------------------------------------------------
 */

export class ReceiptElement {
  public title: string;
  public price: number;
  public subtitle?: string;
  public quantity?: number;
  public currency?: string;
  public imageUrl?: string;

  constructor(element?: any) {
    if (element) {
      this.title = element.title;
      this.price = element.price;
      if (element.subtitle) this.subtitle = element.subtitle;
      if (element.quantity) this.quantity = element.quantity;
      if (element.currency) this.currency = element.currency;
      if (element.imageUrl) this.imageUrl = element.imageUrl;
    }
  }
}

export class TemplateReceipt {
  public recipientName?: string;
  public orderNumber?: string;
  public currency?: string;
  public paymentMethod?: string;
  public orderUrl?: string;
  public timestamp?: string;
  public address?: Address;
  public summary?: {
    totalCost?: number;
    subtotal?: number;
    shippingCost?: number;
    totalTax?: number;
  };
  public adjustments?: {
    name?: string;
    amount?: number;
  }[];
  public elements?: ReceiptElement[];

  constructor(template?: any) {
    if (template) {
      if (template.recipientName) this.recipientName = template.recipientName;
      if (template.orderNumber) this.orderNumber = template.orderNumber;
      if (template.currency) this.currency = template.currency;
      if (template.paymentMethod) this.paymentMethod = template.paymentMethod;
      if (template.orderUrl) this.orderUrl = template.orderUrl;
      if (template.timestamp) this.timestamp = template.timestamp;
      if (template.elements) {
        this.elements = template.elements.map((element: any) => new ReceiptElement(element));
      }
      if (template.address) {
        this.address = {};
        if (template.address.street1) this.address.street1 = template.address.street1;
        if (template.address.street2) this.address.street2 = template.address.street2;
        if (template.address.city) this.address.city = template.address.city;
        if (template.address.postalCode) this.address.postalCode = template.address.postalCode;
        if (template.address.state) this.address.state = template.address.state;
        if (template.address.country) this.address.country = template.address.country;
      }
      if (template.summary) {
        this.summary = {};
        if (template.summary.subtotal) this.summary.subtotal = template.summary.subtotal;
        if (template.summary.shippingCost) this.summary.shippingCost = template.summary.shippingCost;
        if (template.summary.totalTax) this.summary.totalTax = template.summary.totalTax;
        if (template.summary.totalCost) this.summary.totalCost = template.summary.totalCost;
      }
      if (template.adjustments) {
        this.adjustments = template.adjustments.map((adj: any) => ({
          name: adj.name,
          amount: adj.amount
        }));
      }
    }
  }
}

/*
 * Open Graph -----------------------------------------------------------------
 */

export class OpenGraphElement {
  public url: string;
  public buttons?: ButtonElement[];

  constructor(element?: any) {
    if (element) {
      this.url = element.url;
      if (element.buttons) this.buttons = element.buttons.map((button: any) => new ButtonElement(button));
    }
  }
}

export class TemplateOpenGraph {
  public elements: OpenGraphElement[];

  constructor(template?: any) {
    if (template) {
      this.elements = (template.elements || []).map((element: any) => new OpenGraphElement(element));
    }
  }
}

/*
 * Node Template --------------------------------------------------------------
 */

export class NodeTemplate {
  public type: AuthorizedTypes;
  public templateText?: TemplateText;
  public templateQuickReplies?: TemplateQuickReplies;
  public templateButton?: TemplateButtons;
  public templateMedia?: TemplateMedia;
  public templateList?: TemplateList;
  public templateGeneric?: TemplateCarrousel;
  public templateReceipt?: TemplateReceipt;
  public templateOpenGraph?: TemplateOpenGraph;
  public parsedTemplate?: any;

  constructor(template: any) {
    if (template) {
      this.type = template.type;
      /*
       * Even if this is a node for Google, Facebook or whatever, we need to process the
       * parsed template (that can have any form) and our native template which will be used
       * to create a message in the database.
       */
      if (template.parsedTemplate) this.parsedTemplate = template.parsedTemplate;
      switch (this.type) {
        case 'text':
          this.templateText = new TemplateText(template.templateText);
          break;
        case 'quick-replies':
          this.templateQuickReplies = new TemplateQuickReplies(template.templateQuickReplies);
          break;
        case 'button':
          this.templateButton = new TemplateButtons(template.templateButton);
          break;
        case 'media':
          this.templateMedia = new TemplateMedia(template.templateMedia);
          break;
        case 'list':
          this.templateList = new TemplateList(template.templateList);
          break;
        case 'generic':
          this.templateGeneric = new TemplateCarrousel(template.templateGeneric);
          break;
        case 'receipt':
          this.templateReceipt = new TemplateReceipt(template.templateReceipt);
          break;
        case 'open-graph':
          this.templateOpenGraph = new TemplateOpenGraph(template.templateOpenGraph);
          break;
      }
    }
  }

  public get isAutoGenerated(): boolean {
    return (
      (this.type === 'quick-replies' && this.templateQuickReplies.feedType === 'auto') ||
      (this.type === 'list' && this.templateList.feedType === 'auto') ||
      (this.type === 'generic' && this.templateGeneric.feedType === 'auto')
    );
  }
}
