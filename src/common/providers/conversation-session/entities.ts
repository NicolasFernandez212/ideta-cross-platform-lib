import { ConversationKeepAlive } from './interfaces';
import { LastEmitter } from './types';

export class ConversationSession {
  public botToken: string;
  public updatedAt: Date;
  public lastEmitter: LastEmitter;
  public keepAlives?: ConversationKeepAlive[];

  constructor(session?: any) {
    if (session) {
      this.botToken = session.botToken || null;
      this.updatedAt = session.updatedAt ? new Date(session.updatedAt) : new Date();
      this.lastEmitter = session.lastEmitter || null;
      this.keepAlives = (session.keepAlives || []).sort(
        (a: ConversationKeepAlive, b: ConversationKeepAlive) => a.delay - b.delay
      );
    }
  }
}
