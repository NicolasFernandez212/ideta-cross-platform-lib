"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncomingMessage = void 0;
class IncomingMessage {
    constructor({ type, text, targetNode, trackingParam, operations, attachments } = {}) {
        this.type = type;
        if (text)
            this.text = text;
        if (targetNode)
            this.targetNode = targetNode;
        if (trackingParam)
            this.trackingParam = trackingParam;
        if (operations)
            this.operations = operations.filter((operation) => !!operation.type);
        if (attachments)
            this.attachments = attachments;
    }
}
exports.IncomingMessage = IncomingMessage;
