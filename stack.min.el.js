class Stack 
{
  constructor() {
    this.array = [];
    this.min = null;
  }

  push(number) {
    if(this.isEmpty()) {
      this.min = number;
      this.array.push(number);
      return;
    }
    let newNumber = number;

    if(number < this.min) {
      if(number < this.min) {
        newNumber = 2*number - this.min; // number = 2*number - min
        this.min = number;
      }
    } else {

    }
    this.array.push(newNumber);
  }

  pop() {
    if(this.isEmpty()) {
      return 'Empty stack'
    }
    let top = this.array[this.array.length -1];
    this.array.pop()
    if (top < this.min) {
      this.min = 2 * this.min - top; // min = 2*min - number
      top = this.min;
    } 
    return top;
  }
  isEmpty() {
    return !this.array.length;
  }
  show() {
    console.log(this.array, this.min);
  }
}

const stack = new Stack();
stack.push(3);
stack.push(5);
stack.push(2);
stack.push(1);
stack.push(1);
stack.push(-1);
stack.show();
console.log(stack.pop());
stack.show();
console.log(stack.pop());
stack.show();
console.log(stack.pop());
stack.show();

