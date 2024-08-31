const SimpleCache = require('./index');
const cache = new SimpleCache();

// Set a value with no TTL
cache.set('name', 'John Doe');
console.log(cache.get('name')); // Output: { value: 'John Doe', ttl: null }

// Set a value with a TTL of 3 seconds
cache.set('sessionID', 'abc123', 3000);
console.log(cache.get('sessionID')); // Output: { value: 'abc123', ttl: <remaining TTL> }

setTimeout(() => {
    console.log('Here',cache.get('sessionID')); // Output: null (expired)
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