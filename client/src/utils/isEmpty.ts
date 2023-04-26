type IsEmptyParameterTypes =
  | undefined
  | ((...args: unknown[]) => unknown)
  | number
  | boolean
  | Date
  | null
  | string[]
  | object
  | unknown
  | Record<string, never>;

export default function isEmpty(val: IsEmptyParameterTypes): boolean {
  if (val === '' || val === '') return true;

  if (val === undefined) return true;

  if (
    typeof val === 'function' ||
    typeof val === 'number' ||
    typeof val === 'boolean' ||
    Object.prototype.toString.call(val) === '[object Date]'
  )
    return false;

  // null or 0 length array
  if (val == null) {
    return true;
  }

  if (Array.isArray(val)) {
    if (val.length === 0) {
      return true;
    }
  }

  if (typeof val === 'object') {
    // empty object
    const keys = Object.keys(val);
    let r = true;
    keys.forEach((key) => {
      if (Object.prototype.hasOwnProperty.call(val, key)) {
        r = false;
      }
    });
    return r;
  }

  return false;
}
