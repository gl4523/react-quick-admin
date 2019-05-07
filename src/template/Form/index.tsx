import React, {Component} from 'react'
import {Form} from 'element-react'
import './index.scss'
import { FormFieldType } from './type'
import FieldComponent from './components/FieldComponent'
export type FormFieldProps = {
  type: FormFieldType, 
  require?: boolean,
  label?: string,
  fieldAttr?: any,
  itemAttr?: any
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
    const {formConfig, fields} = this.props
    const fieldComponents = this.getFieldComps(fields)
    return (
      <div className='template-form-container'>
        <Form {...formConfig}>
          {fieldComponents}
        </Form>
      </div>
    )
  }

  /**
   * 获取字段组件
   */
  getFieldComps = (fields: Array<FormFieldProps>): JSX.Element[] => {
    const comps = (fields || []).map(field => this.formPack(field, <FieldComponent {...field} />))
    return comps
  }

  /**
   * 打包为表单结构
   */
  formPack = (field: FormFieldProps, packEl: JSX.Element): JSX.Element => {
    const {label, require} = field
    return (
      <Form.Item label={label || ''} required={require}>
        {packEl}
      </Form.Item>
    )
  }
}

export default FormTemplate