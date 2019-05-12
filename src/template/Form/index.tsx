import React, {Component} from 'react'
import {Form} from 'element-react'
import './index.scss'
import { FormFieldType } from './type'
import FieldComponent from './components/FieldComponent'
export type FormFieldProps = {
  // 字段组件类型
  type: FormFieldType, 
  // 字段名
  name: string,
  // 字段属性
  fieldAttr?: any,
  // Form.item 属性
  itemAttr?: any,
  // 组件配置
  options?: any
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
    const fieldConf = field.itemAttr || {}
    return (
      <Form.Item {...fieldConf}>
        {packEl}
      </Form.Item>
    )
  }
}

export default FormTemplate