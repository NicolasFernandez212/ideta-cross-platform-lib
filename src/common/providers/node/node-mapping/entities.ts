import { get } from 'lodash';

import {
  AssertEqualOptions,
  FallbackOptions,
  MappingOptionBehavior,
  PerformOperationsOptions,
  SaveDataOptions,
  SendToExternalApiOptions,
  TriggersOptions
} from './interfaces';
import { BodyType, MappingActionTrigger, MappingType, RequestType } from './types';

import { NlpOptions } from '../../lexicon/entities';
import { DataOperation } from '../entities';

/*
 * Data Input -----------------------------------------------------------------
 */

export class MappingDataInput {
  public saveData: SaveDataOptions;
  public triggers: TriggersOptions;
  public nlp: NlpOptions;
  public fallback: FallbackOptions;

  constructor(mappingDataInput?: any) {
    if (mappingDataInput) {
      this.triggers = {
        active: get(mappingDataInput, 'triggers.active'),
        options: get(mappingDataInput, 'triggers.options', [])
      };
      this.nlp = new NlpOptions(mappingDataInput.nlp);
      this.saveData = {
        active: get(mappingDataInput, 'saveData.active')
      };
      if (get(mappingDataInput, 'saveData.options')) {
        this.saveData.options = {
          key: get(mappingDataInput, 'saveData.options.key', null),
          targetNode: get(mappingDataInput, 'saveData.options.targetNode', null),
          formatCheck: get(mappingDataInput, 'saveData.options.formatCheck', null),
          customFormat: get(mappingDataInput, 'saveData.options.customFormat', null),
          dateDisplay: get(mappingDataInput, 'saveData.options.dateDisplay', 'asInput'),
          dateInput: get(mappingDataInput, 'saveData.options.dateInput', 'dd-mm-yyyy'),
          dateOutput: get(mappingDataInput, 'saveData.options.dateOutput', 'iso8601'),
          targetNodeIfCheckFails: get(mappingDataInput, 'saveData.options.targetNodeIfCheckFails', null)
        };
      }
      this.fallback = {
        active: get(mappingDataInput, 'fallback.active')
      };
      if (get(mappingDataInput, 'fallback.options')) {
        this.fallback.options = {
          type: get(mappingDataInput, 'fallback.options.type', null),
          targetNode: get(mappingDataInput, 'fallback.options.targetNode', null),
          message: get(mappingDataInput, 'fallback.options.message', null),
          url: get(mappingDataInput, 'fallback.options.url', null)
        };
      }
    }
  }
}

/*
 * Go to node -----------------------------------------------------------------
 */

export class MappingGoToNode {
  public active: boolean;
  public options?: {
    targetNode?: string;
    waitForInput?: boolean;
    operations?: DataOperation[];
  };

  constructor(mappingGoToNode?: any) {
    if (mappingGoToNode) {
      this.active = get(mappingGoToNode, 'active');
      if (mappingGoToNode.options) {
        this.options = {
          targetNode: get(mappingGoToNode, 'options.targetNode', null),
          waitForInput: get(mappingGoToNode, 'options.waitForInput', null),
          operations: get(mappingGoToNode, 'options.operations', [])
        };
      }
    }
  }
}

/*
 * Switch ---------------------------------------------------------------------
 */

export class MappingSwitch {
  public assertEqual: AssertEqualOptions;
  public performOperations: PerformOperationsOptions;
  public sendToExternalApi: SendToExternalApiOptions;

  constructor(switchOptions?: any) {
    if (switchOptions) {
      this.assertEqual = {
        active: get(switchOptions, 'assertEqual.active'),
        comparisons: get(switchOptions, 'assertEqual.comparisons', [])
      };
      this.performOperations = {
        active: get(switchOptions, 'performOperations.active')
      };
      if (get(switchOptions, 'performOperations.options')) {
        this.performOperations.options = {
          operations: get(switchOptions, 'performOperations.options.operations', []),
          targetNode: get(switchOptions, 'performOperations.options.targetNode', null)
        };
      }
      this.sendToExternalApi = {
        active: get(switchOptions, 'sendToExternalApi.active')
      };
      if (get(switchOptions, 'sendToExternalApi.options')) {
        this.sendToExternalApi.options = {
          headers: get(switchOptions, 'sendToExternalApi.options.headers', null),
          body: get(switchOptions, 'sendToExternalApi.options.body', null),
          bodyType: get(switchOptions, 'sendToExternalApi.options.bodyType', null),
          data: {
            active: get(switchOptions, 'sendToExternalApi.options.data.active', null),
            arrayPath: get(switchOptions, 'sendToExternalApi.options.data.arrayPath', null),
            key: get(switchOptions, 'sendToExternalApi.options.data.key', null),
            mapping: get(switchOptions, 'sendToExternalApi.options.data.mapping', null),
            type: get(switchOptions, 'sendToExternalApi.options.data.type', null)
          },
          fallbackNode: get(switchOptions, 'sendToExternalApi.options.fallbackNode', null),
          isJSON: get(switchOptions, 'sendToExternalApi.options.isJSON', null),
          method: get(switchOptions, 'sendToExternalApi.options.method', null),
          targetNode: get(switchOptions, 'sendToExternalApi.options.targetNode', null),
          timeout: get(switchOptions, 'sendToExternalApi.options.timeout', null),
          url: get(switchOptions, 'sendToExternalApi.options.url', null)
        };
      }
    }
  }
}

/*
 * Async Actions --------------------------------------------------------------
 */

export class ApiAsyncAction {
  public url: string;
  public method: RequestType;
  public headers?: string[];
  public body?: {
    type: BodyType;
    value: string;
  };

  constructor(action?: any) {
    if (action) {
      this.url = action.url || '';
      this.method = action.method || 'GET';
      this.headers = action.headers || [];
      this.body = {
        type: get(action, 'body.type', 'JSON'),
        value: get(action, 'body.value', '')
      };
    }
  }
}

export class EmailAsyncAction {
  public from: string;
  public addresses: string[];
  public title: string;
  public content: string;

  constructor(action?: any) {
    if (action) {
      this.from = action.from || '';
      this.addresses = action.addresses || [];
      this.title = action.title || '';
      this.content = action.content || '';
    }
  }
}

export class OperationsAsyncAction {
  public operations: DataOperation[];

  constructor(action?: any) {
    if (action) {
      this.operations = action.operations || [];
    }
  }
}

export class WorkflowAsyncAction {
  public node: string;

  constructor(action?: any) {
    if (action) {
      this.node = action.node || '';
    }
  }
}

export class AsyncAction {
  public type: 'email' | 'api' | 'workflow' | 'operations';
  public name: string;
  public optionsApi?: ApiAsyncAction;
  public optionsEmail?: EmailAsyncAction;
  public optionsWorkflow?: WorkflowAsyncAction;
  public optionsOperations?: OperationsAsyncAction;

  constructor(action?: any) {
    if (action) {
      this.type = action.type || '';
      this.name = action.name || '';
      if (action.optionsApi) this.optionsApi = new ApiAsyncAction(action.optionsApi);
      if (action.optionsEmail) this.optionsEmail = new EmailAsyncAction(action.optionsEmail);
      if (action.optionsWorkflow) this.optionsWorkflow = new WorkflowAsyncAction(action.optionsWorkflow);
      if (action.optionsOperations) this.optionsOperations = new OperationsAsyncAction(action.optionsOperations);
    }
  }
}

export class MappingAsyncAction {
  public trigger: MappingActionTrigger;
  public action: AsyncAction;

  constructor(mappingAction?: any) {
    if (mappingAction) {
      this.trigger = mappingAction.trigger || 'enter';
      this.action = new AsyncAction(mappingAction.action);
    }
  }
}

/*
 * Options --------------------------------------------------------------------
 */

export class MappingOptions {
  public behaviorMedia: MappingOptionBehavior;
  public behaviorGeoloc: MappingOptionBehavior;
  public isSystemNode?: boolean;

  constructor(mappingOptions?: any) {
    if (mappingOptions) {
      this.behaviorMedia = {
        active: get(mappingOptions, 'behaviorMedia.active')
      };
      if (get(mappingOptions, 'behaviorMedia.options')) {
        this.behaviorMedia.options = {
          type: get(mappingOptions, 'behaviorMedia.options.type', null),
          message: get(mappingOptions, 'behaviorMedia.options.message', null),
          targetNode: get(mappingOptions, 'behaviorMedia.options.targetNode', null),
          url: get(mappingOptions, 'behaviorMedia.options.url', null)
        };
      }

      this.behaviorGeoloc = {
        active: get(mappingOptions, 'behaviorGeoloc.active')
      };
      if (get(mappingOptions, 'behaviorGeoloc.options')) {
        this.behaviorGeoloc.options = {
          type: get(mappingOptions, 'behaviorGeoloc.options.type', null),
          message: get(mappingOptions, 'behaviorGeoloc.options.message', null),
          targetNode: get(mappingOptions, 'behaviorGeoloc.options.targetNode', null),
          url: get(mappingOptions, 'behaviorGeoloc.options.url', null)
        };
      }

      if (mappingOptions.isSystemNode) this.isSystemNode = mappingOptions.isSystemNode;
    }
  }
}

/*
 * Node Mapping ---------------------------------------------------------------
 */

export class NodeMapping {
  public type: MappingType;
  public dataInput?: MappingDataInput;
  public goToNode?: MappingGoToNode;
  public switch?: MappingSwitch;
  public actions: MappingAsyncAction[];
  public options: MappingOptions;

  constructor(mapping?: any) {
    if (mapping) {
      this.type = mapping.type;

      if (this.type === 'data-input') this.dataInput = new MappingDataInput(mapping.dataInput);
      else if (this.type === 'go-to-node') this.goToNode = new MappingGoToNode(mapping.goToNode);
      else if (this.type === 'switch') this.switch = new MappingSwitch(mapping.switch);

      this.actions = get(mapping, 'actions', []).map((action: any) => new MappingAsyncAction(action));
      this.options = new MappingOptions(mapping.options);
    }
  }
}
