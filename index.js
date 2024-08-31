class SimpleCache {
    constructor() {
        this.cache = new Map();
    }

    set(key, value, ttl) {
        const entry = { value };
        if (ttl) {
            entry.expiry = Date.now() + ttl;
            setTimeout(() => this.cache.delete(key), ttl);
        }
        this.cache.set(key, entry);
    }

    get(key) {
        const entry = this.cache.get(key);
        if (!entry) return null;

        if (entry.expiry) {
            const remainingTTL = entry.expiry - Date.now();
            if (remainingTTL <= 0) {
                this.cache.delete(key);
                return null;
            }
            return { value: entry.value, ttl: remainingTTL };
        }

        return { value: entry.value, ttl: null };
    }

    delete(key) {
        return this.cache.delete(key);
    }

    clear() {
        this.cache.clear();
    }

    size() {
        return this.cache.size;
    }
}

module.exports = SimpleCache;
