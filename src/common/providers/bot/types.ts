export type Channel = 'sandbox' | 'web' | 'facebook' | 'google' | 'slack' | 'smooch' | 'twiliovoice' | 'workplace';

export type NlpService = 'dialogflow' | 'luis';

export type NlpServiceStatus = 'importing' | 'imported' | 'exporting' | 'exported' | 'error';

export type OAuthService = 'google' | 'facebook';

export type AttachmentType = 'image' | 'video' | 'audio' | 'file';

export type DisplayOptionName = 'logo' | 'background' | 'icon' | 'colors' | 'chat' | 'vocal';

export type BackgroundType = 'url' | 'color';

export type DisplayContext = 'preview' | 'sandbox' | 'web' | 'cockpit' | 'embedded';
