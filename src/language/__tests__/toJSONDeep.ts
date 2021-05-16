import { mapValue } from '../../jsutils/mapValue';
import { isObjectLike } from '../../jsutils/isObjectLike';

/**
 * Deeply transforms an arbitrary value to a JSON-safe value by calling toJSON
 * on any nested value which defines it.
 */
export function toJSONDeep(value: unknown): unknown {
  if (!isObjectLike(value)) {
    return value;
  }

  if (typeof value.toJSON === 'function') {
<<<<<<< HEAD
=======
    // @ts-expect-error
>>>>>>> Replace `$FlowFixMe` with `@ts-expect-error`
    return value.toJSON();
  }

  if (Array.isArray(value)) {
    return value.map(toJSONDeep);
  }

  return mapValue(value, toJSONDeep);
}
