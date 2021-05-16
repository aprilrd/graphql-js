const MAX_ARRAY_LENGTH = 10;
const MAX_RECURSIVE_DEPTH = 2;

/**
 * Used to print values in error messages.
 */
export function inspect(value: unknown): string {
  return formatValue(value, []);
}

function formatValue(value: unknown, seenValues: Array<unknown>): string {
  switch (typeof value) {
    case 'string':
      return JSON.stringify(value);
    case 'function':
      return value.name ? `[function ${value.name}]` : '[function]';
    case 'object':
      return formatObjectValue(value, seenValues);
    default:
      return String(value);
  }
}

function formatObjectValue(
<<<<<<< HEAD
  value: object | null,
=======
  value: Object,
>>>>>>> Switch to TS syntax (#3090)
  previouslySeenValues: Array<unknown>,
): string {
  if (value === null) {
    return 'null';
  }

  if (previouslySeenValues.includes(value)) {
    return '[Circular]';
  }

  const seenValues = [...previouslySeenValues, value];

<<<<<<< HEAD
<<<<<<< HEAD
  if (isJSONable(value)) {
    const jsonValue = value.toJSON();
=======
=======
  // @ts-expect-error FIXME: TS Conversion
>>>>>>> add fixme and type assertions
  if (typeof value.toJSON === 'function') {
    // @ts-expect-error FIXME: TS Conversion
    const jsonValue = (value.toJSON as () => unknown)();
>>>>>>> Switch to TS syntax (#3090)

    // check for infinite recursion
    if (jsonValue !== value) {
      return typeof jsonValue === 'string'
        ? jsonValue
        : formatValue(jsonValue, seenValues);
    }
  } else if (Array.isArray(value)) {
    return formatArray(value, seenValues);
  }

  return formatObject(value, seenValues);
}

<<<<<<< HEAD
function isJSONable(value: any): value is { toJSON: () => unknown } {
  return typeof value.toJSON === 'function';
}

function formatObject(object: object, seenValues: Array<unknown>): string {
=======
function formatObject(object: Object, seenValues: Array<unknown>): string {
>>>>>>> Switch to TS syntax (#3090)
  const entries = Object.entries(object);
  if (entries.length === 0) {
    return '{}';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[' + getObjectTag(object) + ']';
  }

  const properties = entries.map(
    ([key, value]) => key + ': ' + formatValue(value, seenValues),
  );
  return '{ ' + properties.join(', ') + ' }';
}

function formatArray(
  array: Array<unknown>,
  seenValues: Array<unknown>,
): string {
  if (array.length === 0) {
    return '[]';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[Array]';
  }

  const len = Math.min(MAX_ARRAY_LENGTH, array.length);
  const remaining = array.length - len;
  const items = [];

  for (let i = 0; i < len; ++i) {
    items.push(formatValue(array[i], seenValues));
  }

  if (remaining === 1) {
    items.push('... 1 more item');
  } else if (remaining > 1) {
    items.push(`... ${remaining} more items`);
  }

  return '[' + items.join(', ') + ']';
}

function getObjectTag(object: object): string {
  const tag = Object.prototype.toString
    .call(object)
    .replace(/^\[object /, '')
    .replace(/]$/, '');

  if (tag === 'Object' && typeof object.constructor === 'function') {
    const name = object.constructor.name;
    if (typeof name === 'string' && name !== '') {
      return name;
    }
  }

  return tag;
}
