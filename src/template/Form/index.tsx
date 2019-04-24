import React, {Component} from 'react'
import {Form} from 'element-react'
import './index.scss'

export interface IFormTemplate {
  props: {
    formConfig?: any
  }
  state: {

  }
}

class FormTemplate extends Component<IFormTemplate["props"], IFormTemplate["state"]> {
  constructor(props) {
    super(props)
  }

  render() {
    const {formConfig} = this.props
    return (
      <div className='template-form-container'>
        <Form {...formConfig}>
          
        </Form>
      </div>
    )
  }
}

export default FormTemplate