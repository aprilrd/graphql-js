/**
 * Return true if `value` is object-like. A value is object-like if it's not
 * `null` and has a `typeof` result of "object".
 */
<<<<<<< HEAD
export function isObjectLike(
  value: unknown,
): value is { [key: string]: unknown } {
=======
export function isObjectLike(value: unknown): value is object {
>>>>>>> Switch to TS syntax (#3090)
  return typeof value == 'object' && value !== null;
}
