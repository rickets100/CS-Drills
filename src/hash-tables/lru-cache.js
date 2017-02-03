// Implement a LRU cache
// Every time you `get` a key, it marks it as most-recently used
// Every time you `put` an item, it expires the least-used item

module.exports = function (maxSize) {
  let head, tail, length = 0, cache = {};

  return {get, put};

  function get(key) {
    current = cache[key];
    if (!current) return;
    if (current.previous && current.next) {
      current.previous.next = current.next
      current.next.previous = current.previous
    } else if (current.previous) {
      tail = current.previous
      delete current.previous.next
    }
    head.previous = current;
    current.next = head
    delete current.previous
    head = current
    return head.value;
  }

  function put(key, value) {
    if (!head) {
      head = {key, value}
      tail = head
    } else {
      let node = {key, value, next: head}
      head.previous = node
      head = node;
    }
    cache[key] = head
    if (length === maxSize) {
      delete cache[tail.key]
      tail.previous.next = null;
      tail = tail.previous;
    } else {
      length++;
    }
  }
}
