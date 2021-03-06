import { TemplateButtons, TemplateMedia, TemplateOpenGraph, TemplateReceipt, TemplateText } from '../node/node-template/entities';
import { TemplateCarrouselManual, TemplateListManual, TemplateQuickRepliesManual } from '../node/node-template/interfaces';
export declare type MessageTemplate = MessageTemplateText | MessageTemplateQuickReplies | MessageTemplateButtons | MessageTemplateMedia | MessageTemplateList | MessageTemplateCarrousel | MessageTemplateReceipt | MessageTemplateOpenGraph;
export declare type MessageTemplateText = {
    type: 'text';
} & TemplateText;
export declare type MessageTemplateQuickReplies = {
    type: 'quick-replies';
} & TemplateQuickRepliesManual;
export declare type MessageTemplateButtons = {
    type: 'button';
} & TemplateButtons;
export declare type MessageTemplateMedia = {
    type: 'media';
} & TemplateMedia;
export declare type MessageTemplateList = {
    type: 'list';
} & TemplateListManual;
export declare type MessageTemplateCarrousel = {
    type: 'generic';
} & TemplateCarrouselManual;
export declare type MessageTemplateReceipt = {
    type: 'receipt';
} & TemplateReceipt;
export declare type MessageTemplateOpenGraph = {
    type: 'open-graph';
} & TemplateOpenGraph;
