"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Broadcast = void 0;
class Broadcast {
    constructor(broadcast) {
        if (broadcast) {
            this.broadcast_id = broadcast.broadcast_id || '';
            this.message_creative_id = broadcast.message_creative_id || '';
            this.label_id = broadcast.label_id || '';
            this.status = broadcast.status || 'SCHEDULED';
            this.template = broadcast.template || {};
            this.scheduled_time = broadcast.scheduled_time || Date.now();
        }
    }
}
exports.Broadcast = Broadcast;
