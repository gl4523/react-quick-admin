import React, {Component} from 'react'
import {Input, InputNumber} from 'element-react'
import { FormFieldType, FormFieldProps } from '../../core'

class InputComp extends Component<FormFieldProps> {
  render() {
    const {type, itemAttr} = this.props
    let Comp = this.getRenderComp(type) as any
    return (
      <>
        {Comp && <Comp {...itemAttr}></Comp>}
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