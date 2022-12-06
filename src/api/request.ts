import service from './index'
import type { ILoginData } from '@/types/login'

// 登录接口
export function login(data: ILoginData) {
  return service({
    url: '/login',
    method: 'POST',
    data
  })
}

