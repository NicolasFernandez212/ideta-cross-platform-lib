"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataComparison = exports.DataOperation = exports.DataSearchOperationOptions = exports.DataComposedOperationOptions = exports.DataBoundedOperationOptions = exports.BotNode = void 0;
const lodash_1 = require("lodash");
const entities_1 = require("./node-mapping/entities");
const entities_2 = require("./node-template/entities");
/*
 * node -----------------------------------------------------------------------
 */
class BotNode {
    constructor(node) {
        if (node) {
            this.id = node.id;
            this.key = node.key;
            this.category = node.category;
            this.name = node.name;
            this.template = new entities_2.NodeTemplate(node.template);
            this.mapping = new entities_1.NodeMapping(node.mapping);
            this.createdAt = node.createdAt;
            this.createdBy = node.createdBy;
        }
    }
    get abstractType() {
        return (this.mapping.type === 'switch' &&
            this.mapping.switch &&
            Object.keys(this.mapping.switch).find((key) => lodash_1.get(this.mapping.switch, `${key}.active`, false)));
    }
    get isSwitchNode() {
        return !!this.abstractType;
    }
    get isGoToNode() {
        return this.mapping.type === 'go-to-node' && this.mapping.goToNode && this.mapping.goToNode.active;
    }
    get isDataInputNode() {
        return !!this.dataInputType;
    }
    get dataInputType() {
        return (this.mapping.type === 'data-input' &&
            this.mapping.dataInput &&
            Object.keys(this.mapping.dataInput).find((key) => lodash_1.get(this.mapping.dataInput, `${key}.active`, false)));
    }
    get isSystemNode() {
        return lodash_1.get(this.mapping, 'options.isSystemNode', false);
    }
}
exports.BotNode = BotNode;
/*
 * Data Operations ------------------------------------------------------------
 */
class DataBoundedOperationOptions {
    constructor(options) {
        if (options) {
            this.isInteger = options.isInteger;
            this.upperBound = {
                type: lodash_1.get(options, 'upperBound.type'),
                value: lodash_1.get(options, 'upperBound.value')
            };
            this.lowerBound = {
                type: lodash_1.get(options, 'lowerBound.type'),
                value: lodash_1.get(options, 'lowerBound.value')
            };
        }
    }
}
exports.DataBoundedOperationOptions = DataBoundedOperationOptions;
class DataComposedOperationOptions {
    constructor(options) {
        if (options) {
            this.separator = { type: lodash_1.get(options, 'separator.type'), value: lodash_1.get(options, 'separator.value') };
            this.replacement = { type: lodash_1.get(options, 'replacement.type'), value: lodash_1.get(options, 'replacement.value') };
            this.object = { type: lodash_1.get(options, 'object.type'), value: lodash_1.get(options, 'object.value') };
            this.source = options.source;
        }
    }
}
exports.DataComposedOperationOptions = DataComposedOperationOptions;
class DataSearchOperationOptions {
    constructor(options) {
        if (options) {
            this.searchable = options.searchable;
            this.key = {
                type: lodash_1.get(options, 'key.type'),
                value: lodash_1.get(options, 'key.value')
            };
            // ###L
            this.type = lodash_1.get(options, 'comparisonType.value') || options.type;
            // ###L
            this.comparator = {
                type: lodash_1.get(options, 'value.type') || lodash_1.get(options, 'comparator.type'),
                value: lodash_1.get(options, 'value.value') || lodash_1.get(options, 'comparator.value')
            };
            if (options.ifTrue) {
                this.ifTrue = {
                    type: lodash_1.get(options, 'ifTrue.type'),
                    value: lodash_1.get(options, 'ifTrue.value')
                };
            }
            if (options.ifFalse) {
                this.ifFalse = {
                    type: lodash_1.get(options, 'ifFalse.type'),
                    value: lodash_1.get(options, 'ifFalse.value')
                };
            }
        }
    }
}
exports.DataSearchOperationOptions = DataSearchOperationOptions;
class DataOperation {
    constructor(operation) {
        if (operation) {
            this.type = operation.type;
            this.key = operation.key;
            this.operand = {
                type: lodash_1.get(operation, 'operand.type'),
                value: lodash_1.get(operation, 'operand.value')
            };
            if (this.type === 'random' || this.type === 'slice') {
                this.options = new DataBoundedOperationOptions(operation.options);
            }
            else if (this.type === 'find' || this.type === 'filter' || this.type === 'conditional') {
                this.options = new DataSearchOperationOptions(operation.options);
            }
            else if (this.type === 'minimum' ||
                this.type === 'maximum' ||
                this.type === 'concatenate' ||
                this.type === 'formula' ||
                this.type === 'split' ||
                this.type === 'replace' ||
                this.type === 'match' ||
                this.type === 'join' ||
                this.type === 'get') {
                this.options = new DataComposedOperationOptions(operation.options);
            }
        }
    }
}
exports.DataOperation = DataOperation;
/*
 * Data Comparisons -----------------------------------------------------------
 */
class DataComparison {
    constructor(comparison) {
        if (comparison) {
            this.type = comparison.type;
            this.key =
                // ###L
                typeof comparison.key === 'string'
                    ? { type: 'key', value: comparison.key }
                    : { type: lodash_1.get(comparison, 'key.type'), value: lodash_1.get(comparison, 'key.value') };
            this.comparator = {
                type: lodash_1.get(comparison, 'comparator.type'),
                value: lodash_1.get(comparison, 'comparator.value')
            };
            this.ifTrue = {
                type: lodash_1.get(comparison, 'ifTrue.type'),
                targetNode: lodash_1.get(comparison, 'ifTrue.targetNode')
            };
            this.ifFalse = {
                type: lodash_1.get(comparison, 'ifFalse.type'),
                targetNode: lodash_1.get(comparison, 'ifFalse.targetNode')
            };
        }
    }
}
exports.DataComparison = DataComparison;
