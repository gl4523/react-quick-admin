import { BaseModule } from "../../core";
import { IBaseModule } from "../../core/Base/BaseModule";

class UserModule extends BaseModule {
  public render():　IBaseModule {
    return {
      baseUrl: '',
      moduleName: '用户管理',
      type: 'form',
      
    }
  };
}

export default UserModule