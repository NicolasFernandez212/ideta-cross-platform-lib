import { ConversationKeepAlive } from './interfaces';
import { LastEmitter } from './types';

export class ConversationSession {
  public botToken: string;
  public updatedAt: Date;
  public lastEmitter: LastEmitter;
  public keepAlives?: ConversationKeepAlive[];

  constructor(session?: any) {
    if (session) {
      this.botToken = session.botToken;
      this.updatedAt = new Date(session.updatedAt);
      this.lastEmitter = session.lastEmitter;
      this.keepAlives = (session.keepAlives || []).sort(
        (a: ConversationKeepAlive, b: ConversationKeepAlive) => a.delay - b.delay
      );
    }
  }
}
