```markdown
# SimpleCache

SimpleCache is a lightweight, in-memory caching module for Node.js, offering basic caching functionalities with TTL (Time-To-Live) support.

## Installation

You can install the package via npm:

### Bash

```bash
npm install cachelite
```

## Features

- In-memory key-value storage
- Time-To-Live (TTL) support for expiring cached entries
- Returns remaining TTL along with the cached value
- Simple API for setting, getting, and deleting cache entries
- Clear the entire cache with a single method
- Check the number of items in the cache

## API

### `set(key, value, ttl)`

Stores a value in the cache with an optional TTL.

- `key` (String): The key under which the value is stored.
- `value` (Any): The value to be stored in the cache.
- `ttl` (Number, Optional): Time-To-Live in milliseconds. If provided, the entry will expire after the specified time.

### `get(key)`

Retrieves a value from the cache, along with the remaining TTL if applicable.

- `key` (String): The key of the value to retrieve.
- Returns: An object with `value` and `ttl` properties, or `null` if the key doesn't exist or has expired.
  - `value` (Any): The cached value.
  - `ttl` (Number | null): The remaining TTL in milliseconds, or `null` if no TTL was set.

### `delete(key)`

Deletes a value from the cache.

- `key` (String): The key of the value to delete.
- Returns: `true` if the key existed and was deleted, `false` otherwise.

### `clear()`

Clears all entries from the cache.

- Returns: `undefined`

### `size()`

Returns the number of items currently stored in the cache.

- Returns: `Number` - The size of the cache.

## Usage

```javascript
const SimpleCache = require('cachelite');
const cache = new SimpleCache();

// Set a value with no TTL
cache.set('name', 'John Doe');
console.log(cache.get('name')); // Output: { value: 'John Doe', ttl: null }

// Set a value with a TTL of 3 seconds
cache.set('sessionID', 'abc123', 3000);
console.log(cache.get('sessionID')); // Output: { value: 'abc123', ttl: <remaining TTL> }
setTimeout(() => {
    console.log(cache.get('sessionID')); // Output: { value: 'abc123', ttl: <remaining TTL> }
}, 1234);

setTimeout(() => {
    console.log(cache.get('sessionID')); // Output: null (expired)
}, 4000);

// Delete a value
cache.set('email', 'john@example.com');
cache.delete('email');
console.log(cache.get('email')); // Output: null

// Clear the cache
cache.set('token', 'xyz789');
cache.set('userID', 'user123');
console.log('Cache size before clearing:', cache.size()); // Output: 2
cache.clear();
console.log('Cache size after clearing:', cache.size()); // Output: 0
```

## License

This project is licensed under the MIT License.
```

This update ensures that the module returns the remaining TTL for cached items that have a TTL set.