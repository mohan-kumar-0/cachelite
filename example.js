const SimpleCache = require('cachelite');
const cache = new SimpleCache();

// Example 1: Basic caching
console.log('Example 1: Basic caching');
cache.set('name', 'John Doe');
console.log(cache.get('name')); // Output: { value: 'John Doe', ttl: null }

// Example 2: Caching with TTL (Time-To-Live)
console.log('Example 2: Caching with TTL');
cache.set('sessionID', 'abc123', 3000); // Cache 'sessionID' for 3 seconds
console.log(cache.get('sessionID')); // Output: { value: 'abc123', ttl: <remaining TTL> }

setTimeout(() => {
    console.log(cache.get('sessionID')); // Output: null (expired)
}, 4000);

// Example 3: Deleting a cache entry
console.log('Example 3: Deleting a cache entry');
cache.set('email', 'john@example.com');
console.log(cache.get('email')); // Output: { value: 'john@example.com', ttl: null }
cache.delete('email');
console.log(cache.get('email')); // Output: null

// Example 4: Clearing the entire cache
console.log('Example 4: Clearing the entire cache');
cache.set('token', 'xyz789');
cache.set('userID', 'user123');
console.log('Cache size before clearing:', cache.size()); // Output: 2
cache.clear();
console.log('Cache size after clearing:', cache.size()); // Output: 0

// Example 5: Handling non-existent keys
console.log('Example 5: Handling non-existent keys');
console.log(cache.get('nonExistentKey')); // Output: null
