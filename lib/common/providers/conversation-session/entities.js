"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationSession = void 0;
class ConversationSession {
    constructor(session) {
        if (session) {
            this.botToken = session.botToken || null;
            this.updatedAt = session.updatedAt ? new Date(session.updatedAt) : new Date();
            this.lastEmitter = session.lastEmitter || null;
            this.keepAlives = (session.keepAlives || []).sort((a, b) => a.delay - b.delay);
        }
    }
}
exports.ConversationSession = ConversationSession;
