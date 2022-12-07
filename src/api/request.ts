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

// 商品列表接口
export function getGoodsList(){
  return service({
    url: "/getGoodsList",
    method: "GET"
  })
}

// 角色列表接口
export function getRoleList(){
  return service({
    url: "/getRoleList",
    method: "GET"
  })
}