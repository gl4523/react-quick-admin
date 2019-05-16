import { FormFieldProps } from "..";

export interface IBaseModule {
  // 模块名
  moduleName: string
  // api地址
  baseUrl: string
  // 类型
  type?: 'table' | 'form' | null
  // 字段
  fields?: FormFieldProps[]
}


export default abstract class BaseModule {
  public abstract render(): IBaseModule
}