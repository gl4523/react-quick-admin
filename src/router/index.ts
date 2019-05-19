export const $$ROUTEGROUPITEM = Symbol("$$ROUTEGROUPITEM")
export const $$ROUTEITEM = Symbol("ROUTEITEM")
import User from '../pages/user'
export default [{
  type: $$ROUTEGROUPITEM,
  name: '表单模式',
  path:　'/formtype',
  childern: [{
    type: $$ROUTEITEM,
    name: '用户管理',
    path: '/user',
    component: User
  }, 
  {
    type: $$ROUTEITEM,
    name: '用户管理',
    path: '/user2',
    component: User
  }]
}]