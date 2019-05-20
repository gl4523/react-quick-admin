import React, {Component} from 'react'
import {Menu} from 'element-react'
import router, { $$ROUTEITEM, $$ROUTEGROUPITEM} from '../../router'
import {Link} from 'react-router-dom'
import './index.scss'
import { joinPath } from '../../utils'
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
    const curPath = joinPath(prePath || '', path) 
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
}

export default NavBar