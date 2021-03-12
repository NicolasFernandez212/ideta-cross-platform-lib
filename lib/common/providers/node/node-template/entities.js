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
            if (element.title)
                this.title = element.title;
            if (element.targetNode)
                this.targetNode = element.targetNode;
            if (element.imageUrl)
                this.imageUrl = element.imageUrl;
            if (element.operations)
                this.operations = element.operations;
        }
    }
}
exports.QuickReplyElement = QuickReplyElement;
class TemplateQuickReplies {
    constructor(template) {
        if (template) {
            if (template.text)
                this.text = template.text;
            if (template.feedType)
                this.feedType = template.feedType;
            if (template.autoOptions)
                this.autoOptions = template.autoOptions;
            if (template.quickReplies)
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
            if (element.type)
                this.type = element.type;
            if (element.title)
                this.title = element.title;
            if (element.targetNode)
                this.targetNode = element.targetNode;
            if (element.operations)
                this.operations = element.operations;
            if (element.url)
                this.url = element.url;
            if (element.openNewTab)
                this.openNewTab = element.openNewTab;
            if (element.messengerExtensions)
                this.messengerExtensions = element.messengerExtensions;
            if (element.webviewHeightRatio)
                this.webviewHeightRatio = element.webviewHeightRatio;
            if (element.service)
                this.service = element.service;
            if (element.targetNodeLoginSuccess)
                this.targetNodeLoginSuccess = element.targetNodeLoginSuccess;
            if (element.targetNodeLoginFailure)
                this.targetNodeLoginFailure = element.targetNodeLoginFailure;
            if (element.dataProfileKey)
                this.dataProfileKey = element.dataProfileKey;
            if (element.phoneNumber)
                this.phoneNumber = element.phoneNumber;
        }
    }
}
exports.ButtonElement = ButtonElement;
class TemplateButtons {
    constructor(template) {
        if (template) {
            if (template.text)
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
            if (element.url)
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
            if (template.intro)
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
            if (element.subtitle)
                this.subtitle = element.subtitle;
            if (element.imageUrl)
                this.imageUrl = element.imageUrl;
            if (element.defaultAction)
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
            if (template.intro)
                this.intro = template.intro;
            if (template.size)
                this.size = template.size;
            if (template.feedType)
                this.feedType = template.feedType;
            if (template.autoOptions)
                this.autoOptions = template.autoOptions;
            if (template.elements)
                this.elements = template.elements;
        }
    }
}
exports.TemplateCarrousel = TemplateCarrousel;
class TemplateList {
    constructor(template) {
        if (template) {
            this.feedType = template.feedType;
            if (template.intro)
                this.intro = template.intro;
            if (template.autoOptions)
                this.autoOptions = template.autoOptions;
            if (template.elements)
                this.elements = template.elements;
            if (template.buttons)
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
            if (element.subtitle)
                this.subtitle = element.subtitle;
            if (element.quantity)
                this.quantity = element.quantity;
            if (element.currency)
                this.currency = element.currency;
            if (element.imageUrl)
                this.imageUrl = element.imageUrl;
        }
    }
}
exports.ReceiptElement = ReceiptElement;
class TemplateReceipt {
    constructor(template) {
        if (template) {
            if (template.recipientName)
                this.recipientName = template.recipientName;
            if (template.orderNumber)
                this.orderNumber = template.orderNumber;
            if (template.currency)
                this.currency = template.currency;
            if (template.paymentMethod)
                this.paymentMethod = template.paymentMethod;
            if (template.orderUrl)
                this.orderUrl = template.orderUrl;
            if (template.timestamp)
                this.timestamp = template.timestamp;
            if (template.elements) {
                this.elements = template.elements.map((element) => new ReceiptElement(element));
            }
            if (template.address) {
                this.address = {};
                if (template.address.street1)
                    this.address.street1 = template.address.street1;
                if (template.address.street2)
                    this.address.street2 = template.address.street2;
                if (template.address.city)
                    this.address.city = template.address.city;
                if (template.address.postalCode)
                    this.address.postalCode = template.address.postalCode;
                if (template.address.state)
                    this.address.state = template.address.state;
                if (template.address.country)
                    this.address.country = template.address.country;
            }
            if (template.summary) {
                this.summary = {};
                if (template.summary.subtotal)
                    this.summary.subtotal = template.summary.subtotal;
                if (template.summary.shippingCost)
                    this.summary.shippingCost = template.summary.shippingCost;
                if (template.summary.totalTax)
                    this.summary.totalTax = template.summary.totalTax;
                if (template.summary.totalCost)
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
