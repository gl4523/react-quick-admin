import React, {Component} from 'react'
import {Input, InputNumber} from 'element-react'
import { FormFieldProps } from '../../template/Form'
import { FormFieldType } from '../../template/Form/type'

class InputComp extends Component<FormFieldProps> {
  render() {
    const {type, fieldAttr} = this.props
    let Comp = this.getRenderComp(type) as any
    return (
      <>
        {Comp && <Comp {...fieldAttr}></Comp>}
      </>
    )
  }

  getRenderComp(type: FormFieldType) {
    switch (type) {
      case 'Input':
        return Input
      case 'InputNumber':
        return InputNumber
    }
  }
}

export default InputComp