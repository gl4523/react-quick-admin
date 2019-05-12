import React, {Component} from 'react'
import axios from 'axios'
import {Input, Form, Button, Message} from 'element-react'
import Loading from '../../components/Loading'
import './index.scss'


class LoginPage extends Component {
  state = {
    username: '',
    password: ''
  }
  render() {
    const {username, password} = this.state
    return (
      <div className='login-page'>
        <div className="form">
          <h2 className="form-title">
            <span>管理平台</span>
          </h2>
          <Form>
            <Form.Item>
              <Input 
              value={username} 
              placeholder="请输入用户名"
              onChange={this.getInputChangeCallback('username')}
              />
            </Form.Item>
            <Form.Item>
              <Input 
              type='password'
              value={password} 
              placeholder="请输入密码"
              onChange={this.getInputChangeCallback('password')}
              />
            </Form.Item>
            <Form.Item className='form-item-btn-group'>
              <Button 
              type="primary"
              onClick={this.onClickLoginBtn}
              >登录</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }

  onClickLoginBtn = () => {
    // axios.get('/static/img.jpg').then(data => {
    //   console.log(data)
    // })
    console.log(Loading)
    Loading.show()
  }

  getInputChangeCallback = (key: string) => {
    return (value) => {
      this.setState(preState => {
        return Object.assign(preState, {[key]: value})
      })
    }
  }
}

export default LoginPage