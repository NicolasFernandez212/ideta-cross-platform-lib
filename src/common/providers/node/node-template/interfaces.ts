import { ButtonElement, GenericElement, QuickReplyElement } from './entities';
import { ButtonLoginService, ButtonUrlWebviewType, LayoutSize, TemplateButtonType, TemplateFeedType } from './types';

import { DataOperation } from '../entities';

/*
 * Quick Replies --------------------------------------------------------------
 */

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

export type TemplateQuickRepliesAuto = TemplateQuickRepliesBase & {
  autoOptions?: QuickRepliesAutoOptions;
};

export type TemplateQuickRepliesManual = TemplateQuickRepliesBase & {
  quickReplies?: QuickReplyElement[];
};

/*
 * Buttons --------------------------------------------------------------------
 */

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
export type ButtonElementPostback = ButtonElementBase & {
  targetNode?: string;
  operations?: DataOperation[];
};

/**
 * type must be 'url'
 */
export type ButtonElementUrl = ButtonElementBase & {
  url?: string;
  openNewTab?: boolean;
  messengerExtensions?: boolean;
  webviewHeightRatio?: ButtonUrlWebviewType;
};

/**
 * type must be 'login'
 */
export type ButtonElementLogin = ButtonElementBase & {
  service?: ButtonLoginService;
  targetNodeLoginSuccess?: string;
  targetNodeLoginFailure?: string;
  dataProfileKey?: string;
};

/**
 * type must be 'call'
 */
export type ButtonElementCall = ButtonElementBase & {
  phoneNumber?: number;
};

/**
 * type must be 'share'
 */
export type ButtonElementShare = ButtonElementBase;

/*
 * List & Carrousel -----------------------------------------------------------
 */

export interface GenericAutoOptions {
  listKey: string;
  title?: string;
  subtitle?: string;
  picture?: string;
  fallbackNode?: string;
  defaultAction?: ButtonElement;
  buttons?: ButtonElement[];
}

// feedType must be 'manual'
export interface TemplateGenericManual {
  elements?: GenericElement[];
}

// feedType must be 'auto'
export interface TemplateGenericAuto {
  autoOptions?: GenericAutoOptions;
}

/*
 * List
 */

export interface TemplateListBase {
  feedType: TemplateFeedType;
  intro?: string;
  buttons?: ButtonElement[];
}

export type TemplateListAuto = TemplateListBase & TemplateGenericAuto;

export type TemplateListManual = TemplateListBase & TemplateGenericManual;

/*
 * Carrousel
 */

export interface TemplateCarrouselBase {
  feedType: TemplateFeedType;
  intro?: string;
  size?: LayoutSize;
}

export type TemplateCarrouselAuto = TemplateCarrouselBase & TemplateGenericAuto;

export type TemplateCarrouselManual = TemplateCarrouselBase & TemplateGenericManual;
