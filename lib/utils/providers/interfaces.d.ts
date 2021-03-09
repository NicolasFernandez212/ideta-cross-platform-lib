export interface KeyValueDico<T> {
    [key: string]: T;
}
export interface Address {
    street1?: string;
    street2?: string;
    city?: string;
    postalCode?: string;
    state?: string;
    country?: string;
}
