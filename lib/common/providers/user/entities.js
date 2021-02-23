"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(user) {
        if (user) {
            this.id = user.id;
            this.avatarUrl = user.avatarUrl;
            this.bots = user.bots || {};
            this.customer = user.customer;
            this.email = user.email;
            this.facebook = user.facebook;
            this.firstname = user.firstname;
            this.lang = user.lang || 'en';
            this.lastname = user.lastname;
            this.plans = user.plans || {};
            this.settings = user.settings || {};
            this.status = user.status;
        }
    }
}
exports.User = User;
