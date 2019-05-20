import React, {Component} from 'react'
import InputComp from '../../../../components/Field/Input'
import CheckBoxComp from '../../../../components/Field/CheckBox'
import SelectComp from '../../../../components/Field/Select'
import RadioComp from '../../../../components/Field/Radio'
import { FormFieldProps, FormFieldType } from '../../../../core';
class FieldComponent extends Component<FormFieldProps> {
  render() {
    const {type, itemAttr = {}} = this.props
    const Comp = this.getComponentByType(type) as any
    if (!Comp) {
      throw new Error('Unsupported component types')
    }
    return (
      <>
        <Comp {...this.props} />
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
      case "InputNumber":
        return InputComp
      case "Checkbox":
        return CheckBoxComp
      case "Radio":
        return SelectComp
      case "Select":
        return RadioComp
    }
  }
}
export default FieldComponent