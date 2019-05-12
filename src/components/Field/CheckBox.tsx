import React, {Component} from 'react'
import {Checkbox} from 'element-react'
import { FormFieldProps } from '../../template/Form'

class CheckBoxComp extends Component<FormFieldProps> {
  render() {
    const {fieldAttr, options = []} = this.props
    return (
      <>
        <Checkbox.Group {...fieldAttr}>
          {
            options.map(option => {
              return <Checkbox {...option}></Checkbox>
            })
          }
        </Checkbox.Group>
      </>
    )
  }
}

export default CheckBoxComp