/* Build a LRU cache with get and put method */


class LruCache {
  #cachePool;
  constructor(limit) {
    this.limit = limit;
    this.#cachePool = {};
    // least rewcently used
    this.lruKeysOrder = [];
  }

  get(key) {
    console.log("getting value " + key);
    if (this.#cachePool.hasOwnProperty(key)) {
      // update lruKey
      // Move the key to the end of the LRU order array to mark it as recently accessed
      const index = this.lruKeysOrder.indexOf(key);
      if (index !== -1) {
        this.lruKeysOrder.splice(index, 1); // Remove the key from its current position
      }
      this.lruKeysOrder.push(key); // Add the key to the end (most recently used)

      return this.#cachePool[key];
    }
    return false;
  }

  put(key, value) {
    console.log("put value" + value);
    // check length
    let cacheLenght = Object.keys(this.#cachePool).length;
    // if full then evict

    if (cacheLenght >= this.limit) {
      // Evict the least recently used key (first in the order array)
      const lruKey = this.lruKeysOrder.shift(); // Remove the least recently used key
      console.log("Evicting key:", lruKey);
      delete this.#cachePool[lruKey]; // Delete the key from the cache pool
    }
    // finally add key value to object
    this.#cachePool[key] = value;
    this.lruKeysOrder.push(key);
    console.log(this.#cachePool);
    console.log(this.lruKeysOrder);
    return this.#cachePool;
  }
}

let cache = new LruCache(3);

 
cache.put("five", 5);
// cache.put("four", 4);
// cache.put("three", 3);
// cache.put("two", 2);
// cache.put("one", 1);

// console.log(cache.get("one"));
// console.log(cache.get("two"));
// console.log(cache.get("four"));




