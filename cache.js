class Cache 
{
  constructor(length) {
    this.arr = new Array(length);
    this.count = 0;
  }

  get(key) {
    if(this.arr[key]) {
      // LRU implement => Swap get item to the first
      this.arr.splice(this.count - 1, 1);
      tmp = this.arr[key];
      // return the value
      return this.arr[key];
    }
    return -1;
  }

  set(key, val) {
    
    if(this.count === this.arr.length) {
      
      // LRU implement => remove first element
      this.count -= 1;
      this.arr.splice(this.count, 1);
      
      console.log('Cache capacity overflowed', this.count);
    }
    this.arr[key] = val;
    this.count++;
  }
}

let cache = new Cache(2);
console.log(cache.get(1));
cache.set(0, 'ehad');
cache.set(1, 'lao');
console.log(cache.get(0));
console.log(cache.get(1));
cache.set(2, 'fao');
console.log(cache.get(2));
console.log(cache.get(0));
console.log(cache.get(1));
console.log(cache.get(2));