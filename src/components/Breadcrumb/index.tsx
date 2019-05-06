import React, {Component} from 'react'
import {Breadcrumb} from 'element-react'
import {Link, withRouter, RouteComponentProps} from 'react-router-dom'
import './index.scss'
interface Props {

}
@withRouter
class BreadcrumbComp extends Component<RouteComponentProps & Props, any, any> {
  constructor(props) {
    super(props)
    console.log(arguments)
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