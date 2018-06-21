# get-certain

> Assert a Map has a given key and return the value for it.

Pretty much just `map.get(key)`, but throws if `key` isn't there.

## Install

```
$ yarn add get-certain
```

## Usage

```js
const getCertain = require('get-certain');

const map = new Map();

map.set('foo', 1);

// Returns 1.
getCertain(map, 'foo');

// This throws.
getCertain(map, 'bar');

// This throws with a custom message.
getCertain(map, 'bar', 'This map is barless.');
```

## API

### getCertain(map, key, [message])

Returns the value from `map` for `key`, or throws if it is not there.

#### map

- Type: `Map`

A Map. I hope you know what you're putting in there.

#### key

- Type: `any`

A key that is hopefully in `map`.

#### message

- Type: `string`

An optional message to throw. Defaults to '"map" does not have an entry for "key".', which isn't terribly descriptive.

## License

MIT © Matthew Fernando Garcia
