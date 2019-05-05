import React, {Component} from 'react'
import {Menu} from 'element-react'
import './index.scss'
class NavBar extends Component {
  render() {
    return (
      <div className="nav-container scroll-container">
        <Menu defaultActive="2" theme={"dark"} className="el-menu-vertical-demo">
          <Menu.SubMenu index="1" title={<span><i className="el-icon-message"></i>导航一</span>}>
            <Menu.Item index="1-1">选项1</Menu.Item>
            <Menu.Item index="1-2">选项2</Menu.Item>
            <Menu.Item index="1-3">选项3</Menu.Item>
          </Menu.SubMenu>
          <Menu.Item index="2"><i className="el-icon-menu" />导航二</Menu.Item>
          <Menu.Item index="3"><i className="el-icon-setting" />导航三</Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default NavBar