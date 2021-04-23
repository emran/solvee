/**
 * Least recently used Cache
 * 
 * The hash map makes the time of get() to be O(1). 
 * The list of double linked nodes make the nodes adding/removal operations O(1).
 * 
 */

class Node {
  constructor(key, data) {
    this.data = data;
    this.key = key;
    this.next = null;
    this.prev = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    // Map
    this.cache = new Map();
    // Create empty double linked list pointer
    this.head = new Node(0,0);
    this.tail = new Node(0,0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
  addNode(node) {
    node.next = this.head.next;
    node.next.prev = node;
    node.prev = this.head;
    this.head.next = node;
  }
  deleteNode(node) {
    node.next.prev = node.prev;
    node.prev.next = node.next;
  }
  get(key) {
    if(this.cache.has(key)) {
      const node = this.cache.get(key);
      // @TODO LRU => Swap get item to the first
      this.deleteNode(node);
      this.addNode(node);
      return node.data;
    }
    return -1;
  }
  set(key, value) {
    // check key already exist or not
    //    - exist -> update data
    //    - else -> new node
    // capacity check
    //    - overflow -> remove the last element
    //    - else -> create node, add to map
    // add node to the first
    let node = null;
    if(this.cache.has(key)) {
      node = this.cache.get(key)
      node.data = value;
      // @TODO LRU => Swap update item to the first
      this.deleteNode(node);
      this.addNode(node);
    } else {
      node = new Node(key, value);
      this.cache.set(key, node);
      this.addNode(node);
      // check the capacity overflow
      if (this.cache.size > this.capacity) {
        this.cache.delete(this.tail.prev.key);
        this.deleteNode(this.tail.prev);
      }
    }
  }
  showCache() {
    // console.log(this.cache, this.head)
    for (let [key, value] of this.cache.entries()) {
      console.log(key + ' => ' + value.data)
    }
  }
  show() {
    let cur = this.head;
    let list = '';
    while (true) {
      list += cur.key + ' -> ';
      if (!cur.next) {
        break;
      }
      cur = cur.next;
    }
    console.log(list);
  }
}

// Test
const cache = new LRUCache(3);
console.log(cache.get('hell'));
cache.set('hell', 'yea...')
cache.set('one', 'first cache')
console.log(cache.get('one'));
// cache.set('one', 'first cache update')
console.log(cache.get('one'));
cache.set('2nd', 'second cache')
console.log(cache.get('hell'));
cache.set('3', 'third cache')
cache.set('2nd', '2nd cache updated too')
console.log(cache.get('hell'));
cache.set('4', 'four')
console.log('========Show Time========')
cache.showCache();
cache.show();