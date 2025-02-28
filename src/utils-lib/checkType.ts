export const checkType = <T, K extends T>(
  value: T,
  condition: boolean | ((value: T) => boolean)
): value is K => {
  return typeof condition === 'boolean' ? condition : condition(value)
}
