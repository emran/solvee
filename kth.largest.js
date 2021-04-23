/**
 * Kth largest number
 * k is index here
 * 
 */
class KthLargest
{
  constructor (k, numbers=[]) {
    this.kth = k;
    this.numbers = numbers;
    this.sort();
  }

  add(val) {
    this.numbers.push(val);
    this.sort();
  }
  sort() {
    // this.numbers.sort((a,b) => a - b); // Ascending order
    this.numbers.sort((a,b) => b - a); // Decending order
  }
  getLargest() {
    // console.log(this.numbers[this.numbers.length - this.kth]); // Ascending => n - k
    console.log(this.numbers[this.kth - 1]); // Descending => k - 1
    return this.numbers[this.numbers.length - this.kth];
  }
  show() {
    console.log(this.numbers);
  }
}

const kth = new KthLargest(5, [3,4,9,6,7,8,1]);
kth.show()
kth.getLargest();
kth.add(22);
kth.add(5);
kth.show()
kth.getLargest();
