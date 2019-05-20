export function CheckAndThrowError(content: string, flag: boolean) {
  if (flag) {
    throw new Error(content)
  }
}

/**
 * 路径拼接
 * @param prePath 
 * @param path 
 */
export function joinPath(prePath: string, path: string): string {
  const reg = /^\//
  CheckAndThrowError('The route must start with / ', !reg.test(path))
  return prePath + path
}