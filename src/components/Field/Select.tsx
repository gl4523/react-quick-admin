import React, {Component} from 'react'
import {Select} from 'element-react'
import { FormFieldProps } from '../../template/Form'

class SelectComp extends Component<FormFieldProps> {
  render() {
    const {fieldAttr, options = []} = this.props
    return (
      <>
        <Select {...fieldAttr}>
          {
            options.map(option => {
              return <Select.Option {...option}/>
            })
          }
        </Select>
      </>
    )
  }
}

export default SelectComp