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
exports.Message = void 0;
const typeorm_1 = require("typeorm");
let Message = class Message {
    constructor(message) {
        if (message) {
            if (message._id)
                this._id = message._id;
            if (message.botId)
                this.botId = message.botId;
            if (message.channel)
                this.channel = message.channel;
            this.userId = message.userId;
            this.sender = message.sender;
            this.template = message.template; // should be {} ?
            this.node = message.node; // should be {} ?
            this.sent_at = message.sent_at ? new Date(message.sent_at) : new Date();
        }
    }
};
__decorate([
    typeorm_1.ObjectIdColumn(),
    __metadata("design:type", String)
], Message.prototype, "_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Message.prototype, "botId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Message.prototype, "channel", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Message.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Message.prototype, "sender", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Object)
], Message.prototype, "template", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Object)
], Message.prototype, "node", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Message.prototype, "sent_at", void 0);
Message = __decorate([
    typeorm_1.Entity({ name: 'messages' }),
    __metadata("design:paramtypes", [Object])
], Message);
exports.Message = Message;
