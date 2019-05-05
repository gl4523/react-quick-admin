import React, {Component} from 'react'
import {Breadcrumb} from 'element-react'
import {Link} from 'react-router-dom'
import './index.scss'
class BreadcrumbComp extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="breadcrumb-container">
        <Breadcrumb style={{display: "table-cell", verticalAlign: "middle"}}>
          <Breadcrumb.Item><Link to='/login'>首页</Link></Breadcrumb.Item>
          <Breadcrumb.Item>活动管理</Breadcrumb.Item>
          <Breadcrumb.Item>活动列表</Breadcrumb.Item>
          <Breadcrumb.Item>活动详情</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    )
  }
}
export default BreadcrumbComp