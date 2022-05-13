import { createRouter, createWebHashHistory } from 'vue-router'
// 按需加载懒加载
const Layout = () => import('@/views/Layout')
const Home = () => import('@/views/home')
// 路由规则
const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: Home
      }
    ]
  }
]
// vue 2.0 new VueRouter({})
// vue3.0 createRouter({})
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
