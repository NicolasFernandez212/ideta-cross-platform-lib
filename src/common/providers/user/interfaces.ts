import { AvailableLang, UserRole, UserStatus } from './types';

export interface User {
  id: string;
  lang: AvailableLang;
  bots: {
    [botId: string]: UserRoleObject;
  };
  email: string;
  avatarUrl?: string;
  firstname?: string;
  lastname?: string;
  facebook?: FacebookUserInfos;
  status?: UserStatus;
  customer?: {
    id: string;
  };
  settings?: any;
}

export interface UserRoleObject {
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
