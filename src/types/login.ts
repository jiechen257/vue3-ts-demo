export interface ILoginData {
  username: string,
  password: string
}

// 为了ref数据的初始化类型定义的类
export class LoginData {
  ruleForm: ILoginData = {
    username: '',
    password: ''
  }
}