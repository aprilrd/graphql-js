/**
 * Return true if `value` is object-like. A value is object-like if it's not
 * `null` and has a `typeof` result of "object".
 */
export function isObjectLike(value: unknown): value is Record<string, unknown>;
