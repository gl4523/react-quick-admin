import React, {Component} from 'react'
import { BaseModule, IBaseModule } from '..'
import {CheckAndThrowError} from '../../utils'
import FormTemplate from '../../template/Form'
export interface IRenderCoreProps {
  cls: new<T extends BaseModule>() => T
}
class RenderCore extends Component<IRenderCoreProps> {
  /**渲染模板 */
  private _renderModule: IBaseModule

  constructor(props) {
    super(props)
    const {cls} = this.props
    CheckAndThrowError("cls参数必须继承于BaseModule", cls instanceof BaseModule)
    this._renderModule = new cls().render()
  }

  render() {
    const {fields = [], typeConf = {}} = this._renderModule
    let templateComp = this.getTemplate(this._renderModule.type)
    return (
      <>
        {templateComp === FormTemplate && <FormTemplate fields={fields} formConfig={typeConf}/>}
      </>
    )
  }

  /**
   * 获取模板
   * @param type 
   */
  private getTemplate(type: IBaseModule["type"]) {
    switch (type) {
      case 'table':
        return
      case 'form':
        return FormTemplate
      default: 
        return
    }
  }
}

export default RenderCore