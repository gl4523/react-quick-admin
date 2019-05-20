import React, {Component} from 'react'
import {Breadcrumb} from 'element-react'
import {Link, withRouter, RouteComponentProps} from 'react-router-dom'
import './index.scss'
@(withRouter as any)
class BreadcrumbComp extends Component<any, any, any> {
  constructor(props) {
    super(props)
  }
  render() {
    const {} = this.props as RouteComponentProps
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

  private getBreadcurmbItem() {

  }
}
export default BreadcrumbComp