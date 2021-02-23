import { get } from 'lodash';

import { ComparisonAction } from './interfaces';
import { ComparisonType, OperationOptions, OperationType } from './types';

import { DataRichSegment } from '../data/interfaces';
import { NodeMapping } from './node-mapping/entities';
import { NodeTemplate } from './node-template/entities';

/*
 * node -----------------------------------------------------------------------
 */

export class BotNode {
  public id: string;
  public key: string;
  public name: string;
  public template: NodeTemplate;
  public mapping: NodeMapping;
  public createdAt: Date;
  public createdBy: string;

  constructor(node: any) {
    if (node) {
      this.id = node.id;
      this.name = node.name;
      this.template = new NodeTemplate(node.template);
      this.mapping = new NodeMapping(node.mapping);
      this.createdAt = node.createdAt;
      this.createdBy = node.createdBy;
    }
  }

  public get isSwitchNode(): boolean {
    return (
      this.mapping.type === 'switch' &&
      this.mapping.switch &&
      !!Object.keys(this.mapping.switch).find((key: string) => get(this.mapping.switch, `${key}.active`, false))
    );
  }

  public get isGoToNode(): boolean {
    return this.mapping.type === 'go-to-node' && this.mapping.goToNode && this.mapping.goToNode.active;
  }

  public get isDataInputNode(): boolean {
    return (
      this.mapping.type === 'data-input' &&
      this.mapping.dataInput &&
      !!Object.keys(this.mapping.dataInput).find((key: string) => get(this.mapping.dataInput, `${key}.active`, false))
    );
  }

  public get isSystemNode(): boolean {
    return get(this.mapping, 'options.isSystemNode', false);
  }
}

/*
 * Data Operations ------------------------------------------------------------
 */

export class DataBoundedOperationOptions {
  public isInteger: boolean;
  public upperBound: DataRichSegment;
  public lowerBound: DataRichSegment;

  constructor(options?: any) {
    if (options) {
      this.isInteger = options.isInteger;
      this.upperBound = {
        type: get(options, 'upperBound.type'),
        value: get(options, 'upperBound.value')
      };
      this.lowerBound = {
        type: get(options, 'lowerBound.type'),
        value: get(options, 'lowerBound.value')
      };
    }
  }
}

export class DataComposedOperationOptions {
  public separator?: DataRichSegment;
  public replacement?: DataRichSegment;
  public object?: DataRichSegment;
  public source?: DataRichSegment[];

  constructor(options?: any) {
    if (options) {
      this.separator = { type: get(options, 'separator.type'), value: get(options, 'separator.value') };
      this.replacement = { type: get(options, 'replacement.type'), value: get(options, 'replacement.value') };
      this.object = { type: get(options, 'object.type'), value: get(options, 'object.value') };
      this.source = options.source;
    }
  }
}

export class DataSearchOperationOptions implements Omit<DataComparison, 'ifTrue' | 'ifFalse'> {
  public searchable?: string;
  public key: DataRichSegment;
  public type: ComparisonType;
  public comparator: DataRichSegment;
  public ifTrue: DataRichSegment;
  public ifFalse: DataRichSegment;

  constructor(options?: any) {
    if (options) {
      this.searchable = options.searchable;
      this.key = {
        type: get(options, 'key.type'),
        value: get(options, 'key.value')
      };
      // ###L
      this.type = get(options, 'comparisonType.value') || options.type;
      // ###L
      this.comparator = {
        type: get(options, 'value.type') || get(options, 'comparator.type'),
        value: get(options, 'value.value') || get(options, 'comparator.value')
      };
      if (options.ifTrue) {
        this.ifTrue = {
          type: get(options, 'ifTrue.type'),
          value: get(options, 'ifTrue.value')
        };
      }
      if (options.ifFalse) {
        this.ifFalse = {
          type: get(options, 'ifFalse.type'),
          value: get(options, 'ifFalse.value')
        };
      }
    }
  }
}

export class DataOperation {
  public type: OperationType;
  public key: string;
  public operand?: DataRichSegment;
  public options?: OperationOptions;

  constructor(operation?: any) {
    if (operation) {
      this.type = operation.type;
      this.key = operation.key;
      this.operand = {
        type: get(operation, 'operand.type'),
        value: get(operation, 'operand.value')
      };
      if (this.type === 'random' || this.type === 'slice') {
        this.options = new DataBoundedOperationOptions(operation.options);
      } else if (this.type === 'find' || this.type === 'filter' || this.type === 'conditional') {
        this.options = new DataSearchOperationOptions(operation.options);
      } else if (
        this.type === 'minimum' ||
        this.type === 'maximum' ||
        this.type === 'concatenate' ||
        this.type === 'formula' ||
        this.type === 'split' ||
        this.type === 'replace' ||
        this.type === 'match' ||
        this.type === 'join' ||
        this.type === 'get'
      ) {
        this.options = new DataComposedOperationOptions(operation.options);
      }
    }
  }
}

/*
 * Data Comparisons -----------------------------------------------------------
 */

export class DataComparison {
  public key: DataRichSegment;
  public type: ComparisonType;
  public comparator?: DataRichSegment;
  public ifTrue: ComparisonAction;
  public ifFalse: ComparisonAction;

  constructor(comparison?: any) {
    if (comparison) {
      this.type = comparison.type;
      this.key =
        // ###L
        typeof comparison.key === 'string'
          ? { type: 'key', value: comparison.key }
          : { type: get(comparison, 'key.type'), value: get(comparison, 'key.value') };
      this.comparator = {
        type: get(comparison, 'comparator.type'),
        value: get(comparison, 'comparator.value')
      };
      this.ifTrue = {
        type: get(comparison, 'ifTrue.type'),
        targetNode: get(comparison, 'ifTrue.targetNode')
      };
      this.ifFalse = {
        type: get(comparison, 'ifFalse.type'),
        targetNode: get(comparison, 'ifFalse.targetNode')
      };
    }
  }
}
