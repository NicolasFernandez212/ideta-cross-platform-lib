import { FacebookUserInfos, UserRoleObject } from './interfaces';
import { AvailableLang, UserStatus } from './types';
import { PlanId } from '../billing/types';
export declare class User {
    id: string;
    avatarUrl?: string;
    bots: {
        [botId: string]: UserRoleObject;
    };
    customer?: {
        id: string;
    };
    email: string;
    facebook?: FacebookUserInfos;
    firstname?: string;
    lang: AvailableLang;
    lastname?: string;
    plans: {
        [plan in PlanId]?: string[];
    };
    settings?: any;
    status?: UserStatus;
    constructor(user?: Partial<User>);
}
