"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeTemplate = exports.TemplateOpenGraph = exports.OpenGraphElement = exports.TemplateReceipt = exports.ReceiptElement = exports.TemplateList = exports.TemplateCarrousel = exports.GenericElement = exports.TemplateMedia = exports.MediaElement = exports.TemplateButtons = exports.ButtonElement = exports.TemplateQuickReplies = exports.QuickReplyElement = exports.TemplateText = void 0;
/*
 * Text -----------------------------------------------------------------------
 */
class TemplateText {
    constructor(template) {
        if (template)
            this.text = template.text;
    }
}
exports.TemplateText = TemplateText;
/*
 * Quick Replies --------------------------------------------------------------
 */
class QuickReplyElement {
    constructor(element) {
        if (element) {
            this.contentType = element.contentType;
            this.title = element.title;
            this.targetNode = element.targetNode;
            this.imageUrl = element.imageUrl;
            this.operations = element.operations;
        }
    }
}
exports.QuickReplyElement = QuickReplyElement;
class TemplateQuickReplies {
    constructor(template) {
        if (template) {
            this.text = template.text;
            this.feedType = template.feedType;
            this.autoOptions = template.autoOptions;
            this.quickReplies = template.quickReplies;
        }
    }
}
exports.TemplateQuickReplies = TemplateQuickReplies;
/*
 * Buttons --------------------------------------------------------------------
 */
class ButtonElement {
    constructor(element) {
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
exports.ButtonElement = ButtonElement;
class TemplateButtons {
    constructor(template) {
        if (template) {
            this.text = template.text;
            if (template.buttons) {
                this.buttons = template.buttons.map((button) => new ButtonElement(button));
            }
        }
    }
}
exports.TemplateButtons = TemplateButtons;
/*
 * Media ----------------------------------------------------------------------
 */
class MediaElement {
    constructor(element) {
        if (element) {
            this.mediaType = element.mediaType;
            this.url = element.url;
            if (element.buttons)
                this.buttons = element.buttons.map((button) => new ButtonElement(button));
        }
    }
}
exports.MediaElement = MediaElement;
class TemplateMedia {
    constructor(template) {
        if (template) {
            this.intro = template.intro;
            this.elements = (template.elements || []).map((element) => new MediaElement(element));
        }
    }
}
exports.TemplateMedia = TemplateMedia;
/*
 * List & Carrousel -----------------------------------------------------------
 */
class GenericElement {
    constructor(element) {
        if (element) {
            this.title = element.title;
            this.subtitle = element.subtitle;
            this.imageUrl = element.imageUrl;
            this.defaultAction = new ButtonElement(element.defaultAction);
            if (element.buttons) {
                this.buttons = element.buttons.map((button) => new ButtonElement(button));
            }
        }
    }
}
exports.GenericElement = GenericElement;
class TemplateCarrousel {
    constructor(template) {
        if (template) {
            this.intro = template.intro;
            this.size = template.size;
            this.feedType = template.feedType;
            this.autoOptions = template.autoOptions;
            this.elements = template.elements;
        }
    }
}
exports.TemplateCarrousel = TemplateCarrousel;
class TemplateList {
    constructor(template) {
        if (template) {
            this.feedType = template.feedType;
            this.intro = template.intro;
            this.autoOptions = template.autoOptions;
            this.elements = template.elements;
            this.buttons = template.buttons;
        }
    }
}
exports.TemplateList = TemplateList;
/*
 * Receipt --------------------------------------------------------------------
 */
class ReceiptElement {
    constructor(element) {
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
exports.ReceiptElement = ReceiptElement;
class TemplateReceipt {
    constructor(template) {
        if (template) {
            this.recipientName = template.recipientName;
            this.orderNumber = template.orderNumber;
            this.currency = template.currency;
            this.paymentMethod = template.paymentMethod;
            this.orderUrl = template.orderUrl;
            this.timestamp = template.timestamp;
            if (template.elements) {
                this.elements = template.elements.map((element) => new ReceiptElement(element));
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
                this.adjustments = template.adjustments.map((adj) => ({
                    name: adj.name,
                    amount: adj.amount
                }));
            }
        }
    }
}
exports.TemplateReceipt = TemplateReceipt;
/*
 * Open Graph -----------------------------------------------------------------
 */
class OpenGraphElement {
    constructor(element) {
        if (element) {
            this.url = element.url;
            if (element.buttons)
                this.buttons = element.buttons.map((button) => new ButtonElement(button));
        }
    }
}
exports.OpenGraphElement = OpenGraphElement;
class TemplateOpenGraph {
    constructor(template) {
        if (template) {
            this.elements = (template.elements || []).map((element) => new OpenGraphElement(element));
        }
    }
}
exports.TemplateOpenGraph = TemplateOpenGraph;
/*
 * Node Template --------------------------------------------------------------
 */
class NodeTemplate {
    constructor(template) {
        if (template) {
            this.type = template.type;
            /*
             * Even if this is a node for Google, Facebook or whatever, we need to process the
             * parsed template (that can have any form) and our native template which will be used
             * to create a message in the database.
             */
            if (template.parsedTemplate)
                this.parsedTemplate = template.parsedTemplate;
            if (this.type === 'text') {
                this.templateText = new TemplateText(template.templateText);
            }
            else if (this.type === 'quick-replies') {
                this.templateQuickReplies = new TemplateQuickReplies(template.templateQuickReplies);
            }
            else if (this.type === 'button') {
                this.templateButton = new TemplateButtons(template.templateButton);
            }
            else if (this.type === 'media') {
                this.templateMedia = new TemplateMedia(template.templateMedia);
            }
            else if (this.type === 'list') {
                this.templateList = new TemplateList(template.templateList);
            }
            else if (this.type === 'generic') {
                this.templateGeneric = new TemplateCarrousel(template.templateGeneric);
            }
            else if (this.type === 'receipt') {
                this.templateReceipt = new TemplateReceipt(template.templateReceipt);
            }
            else if (this.type === 'open-graph') {
                this.templateOpenGraph = new TemplateOpenGraph(template.templateOpenGraph);
            }
        }
    }
    get isAutoGenerated() {
        return ((this.type === 'quick-replies' && this.templateQuickReplies.feedType === 'auto') ||
            (this.type === 'list' && this.templateList.feedType === 'auto') ||
            (this.type === 'generic' && this.templateGeneric.feedType === 'auto'));
    }
}
exports.NodeTemplate = NodeTemplate;
