import React, {Component} from 'react'
import {
  Input,
  InputNumber,
  Checkbox,
  Radio,
  Select
} from 'element-react'
import { FormFieldProps } from '../..';
import { FormFieldType } from '../../type';
class FieldComponent extends Component<FormFieldProps> {
  render() {
    const {type, attr = {}} = this.props
    const Comp = this.getComponentByType(type) as any
    if (!Comp) {
      throw new Error('Unsupported component types')
    }
    return (
      <>
        <Comp {...attr} />
      </>
    )
  }

  /**
   * 获取组件
   * @param type 
   */
  getComponentByType(type: FormFieldType) {
    switch(type) {
      case "Input":
        return Input
      case "Checkbox":
        return Checkbox
      case "InputNumber":
        return InputNumber
      case "Radio":
        return Radio
      case "Select":
        return Select
    }
  }
}
export default FieldComponent