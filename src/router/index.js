import Vue from 'vue'
import Router from 'vue-router'
import DefaultPage from '@/layout/Default'
import BlankPage from '@/layout/Blank'
import GoodsList from '@/page/GoodsList'
import Index from '@/page/Index'
import ChangeCity from '@/page/ChangeCity'
import Login from '@/page/Login'
import Register from '@/page/Register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: DefaultPage,
      redirect: '/index',
      children: [
        {
          path: 's/:name',
          name: 'goods',
          component: GoodsList

        },
        {
          path: '/index',
          name: 'index',
          component: Index
        },{
          path: '/changeCity',
          name: 'changeCity',
          component: ChangeCity
        }
      ]
    },
    {
      path: '/blank',
      name: 'blank',
      component: BlankPage,
      children: [
        {
          path: '/login',
          name: 'login',
          component: Login
        },
        {
          path: '/register',
          name: 'register',
          component: Register
        }
      ]
    }
  ]
})
