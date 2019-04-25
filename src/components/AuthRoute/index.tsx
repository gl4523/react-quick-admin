import React, {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import Layout from '../../layout'
class AuthRoute extends Component {
  render() {
    let flag = true;
    return (
      <>
        {!flag && <Redirect to='/login'></Redirect> }
        {flag && <Route path='/' component={Layout} />}
      </>
    )
  }
}

export default AuthRoute