import React, {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Button} from 'element-react'
import Login from './pages/login'
import './app.scss'
class App extends Component {
  render() {
    return (
      <div className='box-container'>
        <BrowserRouter basename=''>
          <Switch>
            <Route path='/login' component={Login} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App