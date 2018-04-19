// flow
import getCertain from '../src';

describe('getCertain', () => {
  describe('invariants', () => {
    it('throws if "map" is undefined.', () => {
      expect(() => getCertain()).toThrow('"map" must be a Map.');
    });
    it('throws if "map" is not a Map-like object.', () => {
      expect(() => getCertain({has: 3})).toThrow('"map" must be a Map.');
    });
    it('throws if "message" is not a string or undefined.', () => {
      expect(() => getCertain(new Map(), 1, 1)).toThrow(
        '"message" must be a string or undefined.',
      );
    });
  });

  it('returns the value for the given key.', () => {
    const map = new Map();
    const key = 'Some key.';
    const value = 'Some value.';
    map.set(key, value);
    expect(getCertain(map, key)).toEqual(value);
  });

  it('throws with the default message if no "message" is provided and "key" is not present.', () => {
    const map = new Map();
    expect(() => getCertain(map, 'Some key.')).toThrow(
      '"map" does not have an entry for "key".',
    );
  });

  it('throws with "message" if provided and "key" is not present.', () => {
    const map = new Map();
    const message = 'Some custom message.';
    expect(() => getCertain(map, 'Some key.', message)).toThrow(message);
  });
});
