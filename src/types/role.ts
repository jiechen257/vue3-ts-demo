export interface IRole {
  role: number,
  roleName: string
}

export interface IRoleWithAuth {
  roleName: string,
  roleId: number,
  authority: []
}

export class RolePages {
  role_list: IRoleWithAuth[] = []
}