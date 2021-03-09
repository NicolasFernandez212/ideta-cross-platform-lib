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
      this.title = element.title;
      this.targetNode = element.targetNode;
      this.imageUrl = element.imageUrl;
      this.operations = element.operations;
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
      this.text = template.text;
      this.feedType = template.feedType;
      this.autoOptions = template.autoOptions;
      this.quickReplies = template.quickReplies;
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
      this.type = element.type;
      this.title = element.title;
      this.targetNode = element.targetNode;
      this.operations = element.operations;
      this.url = element.url;
      this.openNewTab = element.openNewTab;
      this.messengerExtensions = element.messengerExtensions;
      this.webviewHeightRatio = element.webviewHeightRatio;
      this.service = element.service;
      this.targetNodeLoginSuccess = element.targetNodeLoginSuccess;
      this.targetNodeLoginFailure = element.targetNodeLoginFailure;
      this.dataProfileKey = element.dataProfileKey;
      this.phoneNumber = element.phoneNumber;
    }
  }
}

export class TemplateButtons {
  public text: string;
  public buttons: ButtonElement[];

  constructor(template: any) {
    if (template) {
      this.text = template.text;
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
      this.url = element.url;
      if (element.buttons) this.buttons = element.buttons.map((button: any) => new ButtonElement(button));
    }
  }
}

export class TemplateMedia {
  public intro?: string;
  public elements: MediaElement[];

  constructor(template?: any) {
    if (template) {
      this.intro = template.intro;
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
      this.subtitle = element.subtitle;
      this.imageUrl = element.imageUrl;
      this.defaultAction = new ButtonElement(element.defaultAction);
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
      this.intro = template.intro;
      this.size = template.size;
      this.feedType = template.feedType;
      this.autoOptions = template.autoOptions;
      this.elements = template.elements;
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
      this.intro = template.intro;
      this.autoOptions = template.autoOptions;
      this.elements = template.elements;
      this.buttons = template.buttons;
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
      this.subtitle = element.subtitle;
      this.quantity = element.quantity;
      this.currency = element.currency;
      this.imageUrl = element.imageUrl;
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
      this.recipientName = template.recipientName;
      this.orderNumber = template.orderNumber;
      this.currency = template.currency;
      this.paymentMethod = template.paymentMethod;
      this.orderUrl = template.orderUrl;
      this.timestamp = template.timestamp;
      if (template.elements) {
        this.elements = template.elements.map((element: any) => new ReceiptElement(element));
      }
      if (template.address) {
        this.address = {};
        this.address.street1 = template.address.street1;
        this.address.street2 = template.address.street2;
        this.address.city = template.address.city;
        this.address.postalCode = template.address.postalCode;
        this.address.state = template.address.state;
        this.address.country = template.address.country;
      }
      if (template.summary) {
        this.summary = {};
        this.summary.subtotal = template.summary.subtotal;
        this.summary.shippingCost = template.summary.shippingCost;
        this.summary.totalTax = template.summary.totalTax;
        this.summary.totalCost = template.summary.totalCost;
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
      if (this.type === 'text') {
        this.templateText = new TemplateText(template.templateText);
      } else if (this.type === 'quick-replies') {
        this.templateQuickReplies = new TemplateQuickReplies(template.templateQuickReplies);
      } else if (this.type === 'button') {
        this.templateButton = new TemplateButtons(template.templateButton);
      } else if (this.type === 'media') {
        this.templateMedia = new TemplateMedia(template.templateMedia);
      } else if (this.type === 'list') {
        this.templateList = new TemplateList(template.templateList);
      } else if (this.type === 'generic') {
        this.templateGeneric = new TemplateCarrousel(template.templateGeneric);
      } else if (this.type === 'receipt') {
        this.templateReceipt = new TemplateReceipt(template.templateReceipt);
      } else if (this.type === 'open-graph') {
        this.templateOpenGraph = new TemplateOpenGraph(template.templateOpenGraph);
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
