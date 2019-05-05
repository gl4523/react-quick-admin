import React, {Component} from 'react'
import NavBar from '../components/NavBar'
import BreadCrumb from '../components/Breadcrumb'
import './index.scss'
class Layout extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="layout-container">
        <div className="side-container">
          <h3 className="logo-container">
            <span onClick={this.onClickLogoEvent}>
              <i className="el-icon-setting"></i>&nbsp;React管理平台
            </span>
          </h3>
          <div className="navbar-container">
            <NavBar />
          </div>
        </div>
        <div className="content">
          <div className="breadcrumb">
            <BreadCrumb />
          </div>
          <div className="route-cell scroll-container">
          </div>
        </div>
      </div>
    )
  }

  onClickLogoEvent = () => {
    const {history} = this.props as any
    history.push('/login')
  }
}
export default Layout