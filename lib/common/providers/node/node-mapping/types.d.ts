export declare type MappingType = 'data-input' | 'go-to-node' | 'switch';
export declare type FormatCheckType = 'none' | 'email' | 'phone' | 'date' | 'number' | 'custom' | 'country' | 'nationality';
export declare type DateDisplay = 'asInput' | 'dd/mm/yyyy' | 'mm/dd/yyyy' | 'yyyy/mm/dd';
export declare type DateInput = 'dd-mm-yyyy' | 'mm-dd-yyyy';
export declare type DateOutput = DateDisplay | DateInput | 'timestamp' | 'iso8601' | 'fullIso8601' | 'yyyymmdd';
export declare type FallbackType = 'go-to-node' | 'message' | 'ai';
export declare type RequestType = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
export declare type BodyType = 'XML' | 'JSON' | 'TEXT';
