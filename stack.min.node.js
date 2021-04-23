class Node 
{
  constructor(value, min) {
    this.next = null;
    this.data = value;
    this.min = min;
  }
}

class StackLinkedList
{
  construtor() {
    this.head = null;
  }
  push(value) {
    let min = value;
    // console.log(this.head);
    if(this.head && this.head.min < value) {
      min = this.head.min;
    }
    const node = new Node(value, min);
    node.next = this.head;
    this.head = node;
  }
  pull() {
    if(!this.head) {
      return null;
    }
    const lastInsertedNode = this.head;
    this.head = this.head.next;
    return lastInsertedNode;
  }
  getMin() {
    return this.head.min; // O(1)
  }
  show() {
    let cur = this.head;
    let list = '';
    while (true) {
      list += cur.data +',' + cur.min + ' -> ';
      if (!cur.next) {
        break;
      }
      cur = cur.next;
    }
    console.log(list);
  }
}

// Test
const stack = new StackLinkedList();
console.log(stack.pull());
stack.push(5);
stack.push(3);
stack.push(9);
stack.show();
console.log(stack.getMin());
stack.push(1);
stack.show();
console.log(stack.getMin());
