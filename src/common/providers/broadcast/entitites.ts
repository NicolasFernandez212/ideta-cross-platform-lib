export class Broadcast {
  public broadcast_id: string;
  public message_creative_id: string;
  public label_id: string;
  public status: 'SCHEDULED';
  public template: any;
  public scheduled_time: number;

  constructor(broadcast?: any) {
    if (broadcast) {
      this.broadcast_id = broadcast.broadcast_id || '';
      this.message_creative_id = broadcast.message_creative_id || '';
      this.label_id = broadcast.label_id || '';
      this.status = broadcast.status || 'SCHEDULED';
      this.template = broadcast.template;
      this.scheduled_time = broadcast.scheduled_time || Date.now();
    }
  }
}
