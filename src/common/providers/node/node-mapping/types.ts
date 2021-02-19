export type MappingType = 'data-input' | 'go-to-node' | 'switch';

export type FormatCheckType = 'none' | 'email' | 'phone' | 'date' | 'number' | 'custom' | 'country' | 'nationality';

export type DateDisplay = 'asInput' | 'dd/mm/yyyy' | 'mm/dd/yyyy' | 'yyyy/mm/dd';

export type DateInput = 'dd-mm-yyyy' | 'mm-dd-yyyy';

export type DateOutput = DateDisplay | DateInput | 'timestamp' | 'iso8601' | 'fullIso8601' | 'yyyymmdd';

export type FallbackType = 'go-to-node' | 'message' | 'ai';

export type RequestType = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type BodyType = 'XML' | 'JSON' | 'TEXT';
