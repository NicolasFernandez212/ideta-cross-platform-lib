"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NlpOptions = exports.Lexicon = void 0;
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
            this.active = nlpOptions.active;
            this.options = {
                service: lodash_1.get(nlpOptions, 'options.service'),
                intents: lodash_1.get(nlpOptions, 'options.intents', []),
                storage: {
                    active: lodash_1.get(nlpOptions, 'options.storage.active'),
                    options: {
                        input: lodash_1.get(nlpOptions, 'options.storage.options.input'),
                        intent: lodash_1.get(nlpOptions, 'options.storage.options.intent'),
                        entities: lodash_1.get(nlpOptions, 'options.storage.options.entities', {})
                    }
                }
            };
        }
    }
}
exports.NlpOptions = NlpOptions;
