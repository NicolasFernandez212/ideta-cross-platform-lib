import { UserRole } from './types';
export interface UserEntry {
    id: string;
    role: UserRole;
}
export interface FacebookUserInfos {
    email: string;
    first_name: string;
    granted_scopes: string[];
    id: string;
    last_name: string;
    name: string;
    picture: {
        data: FacebookPicture;
    };
    providerId: string;
}
export interface FacebookPicture {
    height: number;
    is_silhouette: boolean;
    url: string;
    width: number;
}
