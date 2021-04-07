"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DialogflowCredentials = exports.NlpOptions = exports.Lexicon = void 0;
const lodash_1 = require("lodash");
class Lexicon {
    constructor(lexicon) {
        this.intents = Object.keys(lexicon.intents || {}).map((intentId) => (Object.assign({ id: intentId }, lexicon.intents[intentId])));
        this.entities = Object.keys(lexicon.entities || {}).map((entityId) => (Object.assign({ id: entityId }, lexicon.entities[entityId])));
        this.examples = Object.keys(lexicon.examples || {}).map((exampleId) => (Object.assign({ id: exampleId }, lexicon.examples[exampleId])));
    }
}
exports.Lexicon = Lexicon;
class NlpOptions {
    constructor(nlpOptions) {
        if (nlpOptions) {
            this.active = lodash_1.get(nlpOptions, 'active', null);
            if (nlpOptions.options) {
                this.options = {
                    service: lodash_1.get(nlpOptions, 'options.service', null),
                    intents: lodash_1.get(nlpOptions, 'options.intents', []),
                    storage: {
                        active: lodash_1.get(nlpOptions, 'options.storage.active', null)
                    }
                };
                if (lodash_1.get(nlpOptions, 'options.storage.options')) {
                    this.options.storage.options = {
                        input: lodash_1.get(nlpOptions, 'options.storage.options.input', null),
                        intent: lodash_1.get(nlpOptions, 'options.storage.options.intent', null),
                        entities: lodash_1.get(nlpOptions, 'options.storage.options.entities', {})
                    };
                }
            }
        }
    }
}
exports.NlpOptions = NlpOptions;
class DialogflowCredentials {
    constructor(credentials) {
        if (credentials) {
            if (credentials.access_token)
                this.access_token = credentials.access_token;
            if (credentials.refresh_token)
                this.refresh_token = credentials.refresh_token;
            if (credentials.private_key)
                this.private_key = credentials.private_key;
            if (credentials.client_email)
                this.client_email = credentials.client_email;
            if (credentials.project_id)
                this.project_id = credentials.project_id;
            this.project_location = credentials.project_location || 'us';
        }
    }
    loginMethod(checkProjectId) {
        if (checkProjectId && !this.project_id)
            return null;
        if (!!this.access_token && !!this.refresh_token)
            return 'oauth';
        if (!!this.client_email && !!this.private_key)
            return 'account';
        return null;
    }
}
exports.DialogflowCredentials = DialogflowCredentials;
