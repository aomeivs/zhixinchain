import Vue from 'vue'
import Router from 'vue-router'
import IndexGuide from '@/page/IndexGuide'
import Login from '@/page/Login'
import SignUp from '@/page/SignUp'
import GetPWD from '@/page/GetPWD'
import Admin from '@/page/admin/App'
import Sigout from '@/page/Sigout'
import Employ from '@/page/admin/Employ'
import Dashboard from '@/page/admin/Dashboard'
import Test from '@/page/Test'
import NotFound from '@/page/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'IndexGuide',
      component: IndexGuide,
      meta: { title: '首页' }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { title: '登录' }
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp,
      meta: { title: '注册'}
    },
    {
      path: '/getpwd',
      name: 'GetPWD',
      component: GetPWD,
      meta: { title: '找回密码' }
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      meta: { title: '企业后台',auth:true },
      children:[
        {
          path:'dashboard',
          name:'Dashboard',
          component:Dashboard,
          meta:{title:'企业中心',auth:true }
        },
        {
          path:'employ',
          name:'Employ',
          component:Employ,
          meta:{title:'用户详细',auth:true }
        }
      ]
    },
    {
      path: '/sigout',
      name: 'Sigout',
      component: Sigout
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
      meta: { title: '404' }
    }
  ]
})
