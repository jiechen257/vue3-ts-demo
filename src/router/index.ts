import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      redirect: 'goods',
      children: [
        {
          path: 'goods',
          name: 'GoodsView',
          meta: {
            isShow: true,
            title: '商品列表'
          },
          component: () => import('../views/goods/goods-view.vue')
        },
        {
          path: 'user',
          name: 'UserView',
          meta: {
            isShow: true,
            title: '用户列表'
          },
          component: () => import('../views/user/user-view.vue')
        },
        {
          path: 'role',
          name: 'RoleView',
          meta: {
            isShow: true,
            title: '角色列表'
          },
          component: () => import('../views/role/role-view.vue')
        },
        {
          path: 'authority',
          name: 'AuthorityView',
          meta: {
            isShow: false,
            title: '授权列表'
          },
          component: () => import('../views/authority/authority-view.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'LoginView',
      component: () => import('../views/LoginView.vue')
    }
  ]
})

export default router
