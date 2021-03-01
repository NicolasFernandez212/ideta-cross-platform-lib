"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationSession = void 0;
class ConversationSession {
    constructor(session) {
        if (session) {
            this.botToken = session.botToken;
            this.updatedAt = new Date(session.updatedAt).toISOString();
            this.lastEmitter = session.lastEmitter;
            this.keepAlives = (session.keepAlives || []).sort((a, b) => a.delay - b.delay);
        }
    }
}
exports.ConversationSession = ConversationSession;
