import type { IRole } from './role';
import type { IRoleWithAuth } from './role';

export interface IUser {
  id: number,
  nickName: string,
  role: IRole[],
  userName: string
}

export interface IQueryUser {
  nickName: string,
  role: number
}

export interface IUserEdit {
  id: number,
  nickName: string,
  role: number[],
  userName: string
}

export class UserPages {
  selected_data: IQueryUser = {
    nickName: '',
    role: 0
  }
  user_list: IUser[] = []
  role_with_auth_list: IRoleWithAuth[] = []
  editShow = false
  editUser: IUserEdit = {
    id: 0,
    nickName: '',
    role: [],
    userName: ''
  }
}
