export interface EntityValue {
  name: string; // EXAMPLE: 'cake'
  synonyms: string; // EXAMPLE: 'pastry;cookies' in the form "Synonym A; Synonym B; Synonym C; ..."
}

export interface Entity {
  id?: string;
  name: string;
  color?: string;
  values: EntityValue[];
}

export interface Intent {
  id?: string;
  name: string;
}

export interface Example {
  id?: string;
  intentId: string;
  text: string;
  entities: ExamplePart[];
}

export interface ExamplePart {
  entityId: string;
  text: string;
}

export interface LexiconDiff {
  intents: LexiconDiffItem;
  entities: LexiconDiffItem;
  examples: LexiconDiffItem;
}

export interface LexiconDiffItem {
  nbRemote: number;
  nbBoth: number;
  nbLocal: number;
}

export interface LuisCredentials {
  appId?: string;
  appVersion?: string;
  authKey?: string;
  endpointKey?: string;
  useAuthAsEndpointKey?: boolean;
}
