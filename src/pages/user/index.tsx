import { BaseModule, IBaseModule } from "../../core"

class UserModule extends BaseModule {
  public render():　IBaseModule {
    return {
      baseUrl: '',
      moduleName: '用户管理',
      type: 'form',
      fields: [{
        name: '姓名',
        type: 'Input'
      }, {
        name: '密码',
        type: 'Input',
        itemAttr: {
          type: 'password'
        },
        fieldAttr: {
          required: true
        }
      }],
      typeConf: {
        labelPosition: "left",
        labelWidth: 100
      }
    }
  };
}

export default UserModule