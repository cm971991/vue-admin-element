/* eslint-disable no-undef */
import NotFind from '../pages/errors/404.vue'
// 生产/测试环境，使用路由懒加载
const _import = process.env.NODE_ENV === 'development'
  ? file => require(`@/pages/${file}.vue`).default
  : file => () => System.import(`@/pages/${file}.vue`).then(m => m.default)
export default [
  { path: '*', redirect: '/404' },
  { path: '/', component: _import('login/index') },
  { path: '/login', component: _import('login/index') },
  {
    path: '/main',
    component: resolve => require(['../layout/Layout'], resolve),
    children: [
      {
        path: '/404',
        name: '404',
        component: NotFind
      },
      {
        path: '/dashboard',
        name: '首页',
        component: _import('dashboard/index')
      },
      {
        path: '/table/list',
        name: '表格',
        component: _import('table/index')
      },
      {
        path: '/form',
        name: '表单',
        component: _import('form/index')
      },
      {
        path: '/icons',
        name: '图标',
        component: _import('icons/index')
      },
      {
        path: '/role/list',
        name: '角色管理',
        component: _import('roles/index')
      },
      {
        path: '/user/list',
        name: '用户管理',
        component: _import('users/index')
      },
      {
        path: '/menus/list',
        name: '菜单设置',
        component: _import('menus/index')
      },
      {
        path: '/smsCode/list',
        name: '短信码',
        component: _import('smsCode/index')
      },
      {
        path: '/errorCode/list',
        name: '错误码',
        component: _import('errorCode/index')
      },
      {
        path: '/404',
        name: '404',
        component: NotFind
      },
      {
        path: '/401',
        name: '401',
        component: _import('errors/401')
      }
    ]
  }
]
