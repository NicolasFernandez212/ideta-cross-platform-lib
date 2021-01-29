import {
  TemplateButtons,
  TemplateMedia,
  TemplateOpenGraph,
  TemplateQuickRepliesManual,
  TemplateReceipt,
  TemplateText,
} from '../node/interfaces';
import { TemplateCarrouselManual, TemplateListManual } from '../node/types';

export type MessageTemplate =
  | MessageTemplateText
  | MessageTemplateQuickReplies
  | MessageTemplateButtons
  | MessageTemplateMedia
  | MessageTemplateList
  | MessageTemplateCarrousel
  | MessageTemplateReceipt
  | MessageTemplateOpenGraph;

export type MessageTemplateText = { type: 'text' } & TemplateText;
export type MessageTemplateQuickReplies = { type: 'quick-replies' } & TemplateQuickRepliesManual;
export type MessageTemplateButtons = { type: 'button' } & TemplateButtons;
export type MessageTemplateMedia = { type: 'media' } & TemplateMedia;
export type MessageTemplateList = { type: 'list' } & TemplateListManual;
export type MessageTemplateCarrousel = { type: 'generic' } & TemplateCarrouselManual;
export type MessageTemplateReceipt = { type: 'receipt' } & TemplateReceipt;
export type MessageTemplateOpenGraph = { type: 'open-graph' } & TemplateOpenGraph;
