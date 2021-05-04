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
                active: lodash_1.get(mappingDataInput, 'triggers.active', null),
                options: lodash_1.get(mappingDataInput, 'triggers.options', [])
            };
            this.nlp = new entities_1.NlpOptions(mappingDataInput.nlp);
            this.saveData = {
                active: lodash_1.get(mappingDataInput, 'saveData.active', null)
            };
            if (lodash_1.get(mappingDataInput, 'saveData.options')) {
                this.saveData.options = {
                    key: lodash_1.get(mappingDataInput, 'saveData.options.key', null),
                    targetNode: lodash_1.get(mappingDataInput, 'saveData.options.targetNode', null),
                    formatCheck: lodash_1.get(mappingDataInput, 'saveData.options.formatCheck', null),
                    customFormat: lodash_1.get(mappingDataInput, 'saveData.options.customFormat', null),
                    dateDisplay: lodash_1.get(mappingDataInput, 'saveData.options.dateDisplay', 'asInput'),
                    dateInput: lodash_1.get(mappingDataInput, 'saveData.options.dateInput', 'dd-mm-yyyy'),
                    dateOutput: lodash_1.get(mappingDataInput, 'saveData.options.dateOutput', 'iso8601'),
                    targetNodeIfCheckFails: lodash_1.get(mappingDataInput, 'saveData.options.targetNodeIfCheckFails', null)
                };
            }
            this.fallback = {
                active: lodash_1.get(mappingDataInput, 'fallback.active', null)
            };
            if (lodash_1.get(mappingDataInput, 'fallback.options')) {
                this.fallback.options = {
                    type: lodash_1.get(mappingDataInput, 'fallback.options.type', null),
                    targetNode: lodash_1.get(mappingDataInput, 'fallback.options.targetNode', null),
                    message: lodash_1.get(mappingDataInput, 'fallback.options.message', null),
                    url: lodash_1.get(mappingDataInput, 'fallback.options.url', null)
                };
            }
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
            this.active = lodash_1.get(mappingGoToNode, 'active', null);
            if (mappingGoToNode.options) {
                this.options = {
                    targetNode: lodash_1.get(mappingGoToNode, 'options.targetNode', null),
                    waitForInput: lodash_1.get(mappingGoToNode, 'options.waitForInput', null),
                    operations: lodash_1.get(mappingGoToNode, 'options.operations', [])
                };
            }
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
                active: lodash_1.get(switchOptions, 'assertEqual.active', null),
                comparisons: lodash_1.get(switchOptions, 'assertEqual.comparisons', [])
            };
            this.performOperations = {
                active: lodash_1.get(switchOptions, 'performOperations.active', null)
            };
            if (lodash_1.get(switchOptions, 'performOperations.options')) {
                this.performOperations.options = {
                    operations: lodash_1.get(switchOptions, 'performOperations.options.operations', []),
                    targetNode: lodash_1.get(switchOptions, 'performOperations.options.targetNode', null)
                };
            }
            this.sendToExternalApi = {
                active: lodash_1.get(switchOptions, 'sendToExternalApi.active', null)
            };
            if (lodash_1.get(switchOptions, 'sendToExternalApi.options')) {
                this.sendToExternalApi.options = {
                    certificates: lodash_1.get(switchOptions, 'sendToExternalApi.options.certificates', []),
                    headers: lodash_1.get(switchOptions, 'sendToExternalApi.options.headers', null),
                    body: lodash_1.get(switchOptions, 'sendToExternalApi.options.body', null),
                    bodyType: lodash_1.get(switchOptions, 'sendToExternalApi.options.bodyType', null),
                    data: {
                        active: lodash_1.get(switchOptions, 'sendToExternalApi.options.data.active', null),
                        arrayPath: lodash_1.get(switchOptions, 'sendToExternalApi.options.data.arrayPath', null),
                        key: lodash_1.get(switchOptions, 'sendToExternalApi.options.data.key', null),
                        mapping: lodash_1.get(switchOptions, 'sendToExternalApi.options.data.mapping', null),
                        type: lodash_1.get(switchOptions, 'sendToExternalApi.options.data.type', null)
                    },
                    fallbackNode: lodash_1.get(switchOptions, 'sendToExternalApi.options.fallbackNode', null),
                    isJSON: lodash_1.get(switchOptions, 'sendToExternalApi.options.isJSON', null),
                    method: lodash_1.get(switchOptions, 'sendToExternalApi.options.method', null),
                    targetNode: lodash_1.get(switchOptions, 'sendToExternalApi.options.targetNode', null),
                    timeout: lodash_1.get(switchOptions, 'sendToExternalApi.options.timeout', null),
                    url: lodash_1.get(switchOptions, 'sendToExternalApi.options.url', null)
                };
            }
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
                active: lodash_1.get(mappingOptions, 'behaviorMedia.active', null)
            };
            if (lodash_1.get(mappingOptions, 'behaviorMedia.options')) {
                this.behaviorMedia.options = {
                    type: lodash_1.get(mappingOptions, 'behaviorMedia.options.type', null),
                    message: lodash_1.get(mappingOptions, 'behaviorMedia.options.message', null),
                    targetNode: lodash_1.get(mappingOptions, 'behaviorMedia.options.targetNode', null),
                    url: lodash_1.get(mappingOptions, 'behaviorMedia.options.url', null)
                };
            }
            this.behaviorGeoloc = {
                active: lodash_1.get(mappingOptions, 'behaviorGeoloc.active', null)
            };
            if (lodash_1.get(mappingOptions, 'behaviorGeoloc.options')) {
                this.behaviorGeoloc.options = {
                    type: lodash_1.get(mappingOptions, 'behaviorGeoloc.options.type', null),
                    message: lodash_1.get(mappingOptions, 'behaviorGeoloc.options.message', null),
                    targetNode: lodash_1.get(mappingOptions, 'behaviorGeoloc.options.targetNode', null),
                    url: lodash_1.get(mappingOptions, 'behaviorGeoloc.options.url', null)
                };
            }
            if (mappingOptions.isSystemNode)
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
            switch (this.type) {
                case 'data-input':
                    this.dataInput = new MappingDataInput(mapping.dataInput);
                    break;
                case 'go-to-node':
                    this.goToNode = new MappingGoToNode(mapping.goToNode);
                    break;
                case 'switch':
                    this.switch = new MappingSwitch(mapping.switch);
                    break;
            }
            this.actions = lodash_1.get(mapping, 'actions', []).map((action) => new MappingAsyncAction(action));
            this.options = new MappingOptions(mapping.options);
        }
    }
}
exports.NodeMapping = NodeMapping;
