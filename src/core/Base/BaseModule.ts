import { IBaseModule } from "../type"


export default abstract class BaseModule {
  public abstract render(): IBaseModule
}