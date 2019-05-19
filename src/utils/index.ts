export function CheckAndThrowError(content: string, flag: boolean) {
  if (flag) {
    throw new Error(content)
  }
}