export interface Template {
    key: string;
    name: string;
    nodes: {
        [nodeId: string]: {
            name: string;
        };
    };
}
