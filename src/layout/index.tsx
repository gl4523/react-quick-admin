import React, {Component} from 'react'
import NavBar from '../components/NavBar'
import BreadCrumb from '../components/Breadcrumb'
import {Switch, Route} from 'react-router-dom'
import RouterConf, { $$ROUTEITEM, $$ROUTEGROUPITEM } from '../router'
import { joinPath } from '../utils'
import './index.scss'
import RenderCore from '../core/render';
class Layout extends Component {
  private _getIndex: () => number;

  constructor(props) {
    super(props)
    this._getIndex = (() => {
      let count = 0
      return () => ++count
    })()
  }

  render() {
    return (
      <div className="layout-container">
        <div className="side-container">
          <h3 className="logo-container">
            <span onClick={this.onClickLogoEvent}>
              React管理平台
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
            <Switch>
              {RouterConf.map(route => this.getRoutes(route))}
            </Switch>
          </div>
        </div>
      </div>
    )
  }

  /**
   * 点击logo事件
   */
  private onClickLogoEvent = () => {
    const {history} = this.props as any
    history.push('/login')
  }

  /**
   * 获取路由
   */
  private getRoutes = (routeItem: {type,name,path,childern?,component?}, prePath?: string) => {
    const {type, name, path, childern = [], component: Comp} = routeItem
    const curPath = joinPath(prePath || '', path) 
    const index = this._getIndex()
    switch (type) {
      case $$ROUTEITEM:
        return <Route path={curPath} component={() => {
          return <RenderCore cls={Comp} />
        }} key={index}></Route>
      case $$ROUTEGROUPITEM:
        return (
          <Route path={curPath} key={index} component={() => {
            return (
            <>
              {childern.map(child => this.getRoutes(child, curPath))}
            </>
            )
          }}></Route>
        )
    }
  }
}
export default Layout