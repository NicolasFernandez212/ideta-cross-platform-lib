import { BotNode } from '../node/entities';
export interface BroadcastNode extends BotNode {
    hasChanged: boolean;
}
