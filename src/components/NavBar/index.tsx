import React, {Component} from 'react'
import {Menu} from 'element-react'
import router, { $$ROUTEITEM, $$ROUTEGROUPITEM} from '../../router'
import {Link} from 'react-router-dom'
import './index.scss'
import { CheckAndThrowError } from '../../utils';
class NavBar extends Component {
  private _getIndex: () => number;
  constructor(props) {
    super(props)
    this._getIndex = (() => {
      let count = 0
      return () => ++count
    })()
  }
  shouldComponentUpdate() {
    return false
  }
  public render() {
    const menuItems = (router || []).map(routeItem => this.getMenu(routeItem))
    return (
      <div className="nav-container scroll-container">
        <Menu defaultActive="2" theme={"dark"} className="el-menu-vertical-demo">
          {/* <Menu.SubMenu index="1" title={<span><i className="el-icon-message"></i>导航一</span>}>
            <Menu.Item index="11">选项1</Menu.Item>
            <Menu.Item index="1-2">选项2</Menu.Item>
            <Menu.Item index="1-3">选项3</Menu.Item>
          </Menu.SubMenu>
          <Menu.Item index="2"><i className="el-icon-menu" />导航二</Menu.Item>
          <Menu.Item index="3"><i className="el-icon-setting" />导航三</Menu.Item> */}
          {menuItems}
        </Menu>
      </div>
    )
  }

  /**
   * 获取菜单节点
   * @param routeItem 
   */
  private getMenu(routeItem: {type,name,path,childern?,component?}, prePath?: string) {
    const {type, name, path, childern = [], component: Comp} = routeItem
    const curPath = this.joinPath(prePath || '', path) 
    const index = this._getIndex().toString()
    switch (type) {
      case $$ROUTEITEM:
        return (
          <Link to={curPath} key={index}>
            <Menu.Item index={index}>
              {name}
            </Menu.Item>
          </Link>
        )
      case $$ROUTEGROUPITEM:
        return (
          <Menu.SubMenu 
          index={index}
          title={<span>{name}</span>}
          key={index}
          >
            {childern.map(child => this.getMenu(child, curPath))}
          </Menu.SubMenu>
        )
      default:
        return null
    }
  }

  /**
   * 连接路径
   * @param prePath 
   * @param path 
   */
  public joinPath(prePath: string, path: string): string {
    const reg = /^\//
    CheckAndThrowError('The route must start with / ', !reg.test(path))
    console.log(prePath + path)
    return prePath + path
  }
}

export default NavBar