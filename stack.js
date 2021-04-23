class Stack 
{
  constructor() {
    this.array = [];
  }

  push(number) {
    this.array.push(number);
  }

  pop() {
    return this.array.pop()
  }

  show() {
    console.log(this.array);
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.show();
stack.pop();
stack.show();
stack.push(4);
stack.show();
