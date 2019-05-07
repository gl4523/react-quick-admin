import React, {Component} from 'react'
import {Form} from 'element-react'
import './index.scss'
import { FormFieldType } from './type';
export type FormFieldProps = {
  type: FormFieldType, 
  attr?: any
}
export interface IFormTemplate {
  props: {
    formConfig?: any,
    fields: Array<FormFieldProps>
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