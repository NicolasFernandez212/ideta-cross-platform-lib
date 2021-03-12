"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conversation = void 0;
const typeorm_1 = require("typeorm");
/**
 * Conversations model
 *
 * Type : DB model (conversations/{botId}/{channel}/{userId})
 * Representation : Front, Back, CF
 */
let Conversation = class Conversation {
    constructor(conversation) {
        if (conversation) {
            if (conversation._id)
                this._id = conversation._id;
            if (conversation.botId)
                this.botId = conversation.botId;
            if (conversation.channel)
                this.channel = conversation.channel;
            if (conversation.userId)
                this.userId = conversation.userId;
            this.status = conversation.status || 'noeud_0';
            this.messages = conversation.messages || 0;
            this.path = conversation.path || {};
            this.data = conversation.data || {};
            this.metadata = conversation.metadata || {};
            this.first_connection = conversation.first_connection ? new Date(conversation.first_connection) : new Date();
            this.last_delivered = conversation.last_delivered ? new Date(conversation.last_delivered) : new Date();
            this.last_read = conversation.last_read ? new Date(conversation.last_read) : new Date();
            this.last_sent = conversation.last_sent ? new Date(conversation.last_sent) : new Date();
            this.isRead = conversation.isRead || false;
            this.label = conversation.label || null;
            if (conversation.assigneeId)
                this.assigneeId = conversation.assigneeId;
        }
    }
};
__decorate([
    typeorm_1.ObjectIdColumn(),
    __metadata("design:type", String)
], Conversation.prototype, "_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Conversation.prototype, "botId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Conversation.prototype, "channel", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Conversation.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column({ default: 'noeud_0' }),
    __metadata("design:type", String)
], Conversation.prototype, "status", void 0);
__decorate([
    typeorm_1.Column({ default: 0 }),
    __metadata("design:type", Number)
], Conversation.prototype, "messages", void 0);
__decorate([
    typeorm_1.Column({ default: {} }),
    __metadata("design:type", Object)
], Conversation.prototype, "path", void 0);
__decorate([
    typeorm_1.Column({ default: {} }),
    __metadata("design:type", Object)
], Conversation.prototype, "data", void 0);
__decorate([
    typeorm_1.Column({ default: {} }),
    __metadata("design:type", Object)
], Conversation.prototype, "metadata", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Conversation.prototype, "first_connection", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Conversation.prototype, "last_delivered", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Conversation.prototype, "last_read", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Conversation.prototype, "last_sent", void 0);
__decorate([
    typeorm_1.Column({ default: false }),
    __metadata("design:type", Boolean)
], Conversation.prototype, "isRead", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Conversation.prototype, "label", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Conversation.prototype, "assigneeId", void 0);
Conversation = __decorate([
    typeorm_1.Entity({ name: 'conversations' }),
    __metadata("design:paramtypes", [Object])
], Conversation);
exports.Conversation = Conversation;
