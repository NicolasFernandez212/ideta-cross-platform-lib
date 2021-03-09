export interface KeyValueDico<T> {
  [key: string]: T;
}

/*
 * Address used in Facebook receipt nodes for axample
 */
export interface Address {
  street1?: string;
  street2?: string;
  city?: string;
  postalCode?: string;
  state?: string;
  country?: string;
}
