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

/**输入框 */
export type FormFieldType = "Input" | "InputNumber" | "Radio" | "Checkbox" | "Select"