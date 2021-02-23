import { Attachment, IncomingMessageType } from './types';

import { DataOperation } from '../node/entities';

export class IncomingMessage {
  public type: IncomingMessageType;
  public text?: string;
  public targetNode?: string;
  public trackingParam?: string;
  public operations?: DataOperation[];
  public attachments?: Attachment[];

  constructor({ type, text, targetNode, trackingParam, operations, attachments }: Partial<IncomingMessage> = {}) {
    this.type = type;
    if (text) this.text = text;
    if (targetNode) this.targetNode = targetNode;
    if (trackingParam) this.trackingParam = trackingParam;
    if (operations) this.operations = operations.filter((operation: DataOperation) => !!operation.type);
    if (attachments) this.attachments = attachments;
  }
}
