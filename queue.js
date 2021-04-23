class Queue 
{
  constructor() {
    this.array = [];
  }

  push(number) {
    this.array.push(number);
  }

  pop() {
    return this.array.splice(0, 1)
  }

  show() {
    console.log(this.array);
  }
}

const queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);
queue.show();
queue.pop();
queue.pop();
queue.pop();
queue.pop();
queue.show();
queue.push(4);
queue.show();
