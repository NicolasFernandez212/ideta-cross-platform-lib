"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeMapping = exports.MappingOptions = exports.MappingAsyncAction = exports.AsyncAction = exports.WorkflowAsyncAction = exports.OperationsAsyncAction = exports.EmailAsyncAction = exports.ApiAsyncAction = exports.MappingSwitch = exports.MappingGoToNode = exports.MappingDataInput = void 0;
const lodash_1 = require("lodash");
const entities_1 = require("../../lexicon/entities");
/*
 * Data Input -----------------------------------------------------------------
 */
class MappingDataInput {
    constructor(mappingDataInput) {
        if (mappingDataInput) {
            this.triggers = {
                active: lodash_1.get(mappingDataInput, 'triggers.active'),
                options: lodash_1.get(mappingDataInput, 'triggers.options', [])
            };
            this.nlp = new entities_1.NlpOptions(mappingDataInput.nlp);
            this.saveData = {
                active: lodash_1.get(mappingDataInput, 'saveData.active'),
                options: {
                    key: lodash_1.get(mappingDataInput, 'saveData.options.key'),
                    targetNode: lodash_1.get(mappingDataInput, 'saveData.options.targetNode'),
                    formatCheck: lodash_1.get(mappingDataInput, 'saveData.options.formatCheck'),
                    customFormat: lodash_1.get(mappingDataInput, 'saveData.options.customFormat'),
                    dateDisplay: lodash_1.get(mappingDataInput, 'saveData.options.dateDisplay', 'asInput'),
                    dateInput: lodash_1.get(mappingDataInput, 'saveData.options.dateInput', 'dd-mm-yyyy'),
                    dateOutput: lodash_1.get(mappingDataInput, 'saveData.options.dateOutput', 'iso8601'),
                    targetNodeIfCheckFails: lodash_1.get(mappingDataInput, 'saveData.options.targetNodeIfCheckFails')
                }
            };
            this.fallback = {
                active: lodash_1.get(mappingDataInput, 'fallback.active'),
                options: {
                    type: lodash_1.get(mappingDataInput, 'fallback.options.type'),
                    targetNode: lodash_1.get(mappingDataInput, 'fallback.options.targetNode'),
                    message: lodash_1.get(mappingDataInput, 'fallback.options.message'),
                    url: lodash_1.get(mappingDataInput, 'fallback.options.url')
                }
            };
        }
    }
}
exports.MappingDataInput = MappingDataInput;
/*
 * Go to node -----------------------------------------------------------------
 */
class MappingGoToNode {
    constructor(mappingGoToNode) {
        if (mappingGoToNode) {
            this.active = lodash_1.get(mappingGoToNode, 'active');
            this.options = {
                targetNode: lodash_1.get(mappingGoToNode, 'options.targetNode'),
                waitForInput: lodash_1.get(mappingGoToNode, 'options.waitForInput'),
                operations: lodash_1.get(mappingGoToNode, 'options.operations', [])
            };
        }
    }
}
exports.MappingGoToNode = MappingGoToNode;
/*
 * Switch ---------------------------------------------------------------------
 */
class MappingSwitch {
    constructor(switchOptions) {
        if (switchOptions) {
            this.assertEqual = {
                active: lodash_1.get(switchOptions, 'assertEqual.active'),
                comparisons: lodash_1.get(switchOptions, 'assertEqual.comparisons', [])
            };
            this.performOperations = {
                active: lodash_1.get(switchOptions, 'performOperations.active'),
                options: {
                    operations: lodash_1.get(switchOptions, 'performOperations.options.operations', []),
                    targetNode: lodash_1.get(switchOptions, 'performOperations.options.targetNode')
                }
            };
            this.sendToExternalApi = {
                active: lodash_1.get(switchOptions, 'sendToExternalApi.active'),
                options: {
                    headers: lodash_1.get(switchOptions, 'sendToExternalApi.options.headers'),
                    body: lodash_1.get(switchOptions, 'sendToExternalApi.options.body'),
                    bodyType: lodash_1.get(switchOptions, 'sendToExternalApi.options.bodyType'),
                    data: {
                        active: lodash_1.get(switchOptions, 'sendToExternalApi.options.data.active'),
                        arrayPath: lodash_1.get(switchOptions, 'sendToExternalApi.options.data.arrayPath'),
                        key: lodash_1.get(switchOptions, 'sendToExternalApi.options.data.key'),
                        mapping: lodash_1.get(switchOptions, 'sendToExternalApi.options.data.mapping'),
                        type: lodash_1.get(switchOptions, 'sendToExternalApi.options.data.type')
                    },
                    fallbackNode: lodash_1.get(switchOptions, 'sendToExternalApi.options.fallbackNode'),
                    isJSON: lodash_1.get(switchOptions, 'sendToExternalApi.options.isJSON'),
                    method: lodash_1.get(switchOptions, 'sendToExternalApi.options.method'),
                    targetNode: lodash_1.get(switchOptions, 'sendToExternalApi.options.targetNode'),
                    timeout: lodash_1.get(switchOptions, 'sendToExternalApi.options.timeout'),
                    url: lodash_1.get(switchOptions, 'sendToExternalApi.options.url')
                }
            };
        }
    }
}
exports.MappingSwitch = MappingSwitch;
/*
 * Async Actions --------------------------------------------------------------
 */
class ApiAsyncAction {
    constructor(action) {
        if (action) {
            this.url = action.url || '';
            this.method = action.method || 'GET';
            this.headers = action.headers || [];
            this.body = {
                type: lodash_1.get(action, 'body.type', 'JSON'),
                value: lodash_1.get(action, 'body.value', '')
            };
        }
    }
}
exports.ApiAsyncAction = ApiAsyncAction;
class EmailAsyncAction {
    constructor(action) {
        if (action) {
            this.from = action.from || '';
            this.addresses = action.addresses || [];
            this.title = action.title || '';
            this.content = action.content || '';
        }
    }
}
exports.EmailAsyncAction = EmailAsyncAction;
class OperationsAsyncAction {
    constructor(action) {
        if (action) {
            this.operations = action.operations || [];
        }
    }
}
exports.OperationsAsyncAction = OperationsAsyncAction;
class WorkflowAsyncAction {
    constructor(action) {
        if (action) {
            this.node = action.node || '';
        }
    }
}
exports.WorkflowAsyncAction = WorkflowAsyncAction;
class AsyncAction {
    constructor(action) {
        if (action) {
            this.type = action.type || '';
            this.name = action.name || '';
            if (action.optionsApi)
                this.optionsApi = new ApiAsyncAction(action.optionsApi);
            if (action.optionsEmail)
                this.optionsEmail = new EmailAsyncAction(action.optionsEmail);
            if (action.optionsWorkflow)
                this.optionsWorkflow = new WorkflowAsyncAction(action.optionsWorkflow);
            if (action.optionsOperations)
                this.optionsOperations = new OperationsAsyncAction(action.optionsOperations);
        }
    }
}
exports.AsyncAction = AsyncAction;
class MappingAsyncAction {
    constructor(mappingAction) {
        if (mappingAction) {
            this.trigger = mappingAction.trigger || 'enter';
            this.action = new AsyncAction(mappingAction.action);
        }
    }
}
exports.MappingAsyncAction = MappingAsyncAction;
/*
 * Options --------------------------------------------------------------------
 */
class MappingOptions {
    constructor(mappingOptions) {
        if (mappingOptions) {
            this.behaviorMedia = {
                active: lodash_1.get(mappingOptions, 'behaviorMedia.active'),
                options: {
                    type: lodash_1.get(mappingOptions, 'behaviorMedia.options.type'),
                    message: lodash_1.get(mappingOptions, 'behaviorMedia.options.message'),
                    targetNode: lodash_1.get(mappingOptions, 'behaviorMedia.options.targetNode'),
                    url: lodash_1.get(mappingOptions, 'behaviorMedia.options.url')
                }
            };
            this.behaviorGeoloc = {
                active: lodash_1.get(mappingOptions, 'behaviorGeoloc.active'),
                options: {
                    type: lodash_1.get(mappingOptions, 'behaviorGeoloc.options.type'),
                    message: lodash_1.get(mappingOptions, 'behaviorGeoloc.options.message'),
                    targetNode: lodash_1.get(mappingOptions, 'behaviorGeoloc.options.targetNode'),
                    url: lodash_1.get(mappingOptions, 'behaviorGeoloc.options.url')
                }
            };
            this.isSystemNode = mappingOptions.isSystemNode;
        }
    }
}
exports.MappingOptions = MappingOptions;
/*
 * Node Mapping ---------------------------------------------------------------
 */
class NodeMapping {
    constructor(mapping) {
        if (mapping) {
            this.type = mapping.type;
            if (this.type === 'data-input')
                this.dataInput = new MappingDataInput(mapping.dataInput);
            else if (this.type === 'go-to-node')
                this.goToNode = new MappingGoToNode(mapping.goToNode);
            else if (this.type === 'switch')
                this.switch = new MappingSwitch(mapping.switch);
            this.actions = lodash_1.get(mapping, 'actions', []).map((action) => new MappingAsyncAction(action));
            this.options = new MappingOptions(mapping.options);
        }
    }
}
exports.NodeMapping = NodeMapping;
