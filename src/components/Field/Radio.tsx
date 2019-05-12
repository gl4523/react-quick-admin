import React, {Component} from 'react'
import {Radio} from 'element-react'
import { FormFieldProps } from '../../template/Form'

class RadioComp extends Component<FormFieldProps> {
  render() {
    const {fieldAttr, options = []} = this.props
    return (
      <>
        <div>
          <Radio.Group {...fieldAttr}>
            {
              options.map(option => {
                const {name} = option
                return <Radio {...option}>{name}</Radio>
              })
            }
          </Radio.Group>
        </div>
      </>
    )
  }
}

export default RadioComp