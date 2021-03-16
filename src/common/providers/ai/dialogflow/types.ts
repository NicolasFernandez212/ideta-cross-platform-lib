export type WebhookState =
  | 'WEBHOOK_STATE_UNSPECIFIED'
  | 'WEBHOOK_STATE_ENABLED'
  | 'WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING';

export type EntityKind = 'KIND_UNSPECIFIED' | 'KIND_MAP' | 'KIND_LIST';

export type AutoExpansionMode = 'AUTO_EXPANSION_MODE_UNSPECIFIED' | 'AUTO_EXPANSION_MODE_DEFAULT';

export type ExampleType = 'TYPE_UNSPECIFIED' | 'EXAMPLE';