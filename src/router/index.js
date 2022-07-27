import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/HomeView'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: '模仿bilibili'
    }
  },
  {
    path: '/page',
    name: 'commonpage',
    component: () => import('../views/CommonPage/CommonPage'),
    meta: {
      title: 'page页面'
    }
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/Search/SearchPage'),
    meta: {
      title: '搜索'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 路由导航 导航守卫 前置钩子（hook）
router.beforeEach((to, from, next) => {
  // 从from跳到to
  document.title = to.meta.title
  next()
})

// 后置钩子，不用加next()
router.afterEach((to, from) => { })

export default router
