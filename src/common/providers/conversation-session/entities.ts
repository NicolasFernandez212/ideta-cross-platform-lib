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
      this.updatedAt = new Date(session.updatedAt).toISOString() as any;
      this.keepAlives = session.keepAlives || [];
    }
  }
}
