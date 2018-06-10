// @flow
import assert from 'assert';

export default function getCertain<Key, Value>(
  map: Map<Key, Value>,
  key: Key,
  message: string = '"map" does not have an entry for "key".',
): Value {
  assert(
    map && typeof map.get === 'function' && typeof map.has === 'function',
    // Or at least look like a Map.
    '"map" must be a Map.',
  );
  assert(
    typeof message === 'string',
    '"message" must be a string or undefined.',
  );
  assert(map.has(key), message);
  // $FlowFixMe
  return map.get(key);
}
