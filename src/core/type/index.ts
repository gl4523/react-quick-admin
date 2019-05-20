export interface IBaseModule {
  // 模块名
  moduleName: string
  // api地址
  baseUrl: string
  // 类型
  type?: 'table' | 'form' | null
  // 字段
  fields?: FormFieldProps[]
  // 装饰器
  decorator?: React.Component
  // 类型配置(表单类型会挂载最外层From上)
  typeConf?: any
}

export type FormFieldProps = {
  // 字段组件类型
  type: FormFieldType, 
  // 字段名
  name: string,
  // 字段属性
  fieldAttr?: any,
  // Form.item 属性
  itemAttr?: any,
  // 组件配置
  options?: any
}

export type FormFieldType = "Input" | "InputNumber" | "Radio" | "Checkbox" | "Select"
