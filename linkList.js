class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// const nodeOne = new Node(1);
// const nodeTwo = new Node(2);
// const nodeThree = new Node(3);

// nodeTwo.next = nodeThree;
// nodeOne.next = nodeTwo;

// const head = nodeOne;

// console.log(head)

/**
 * LinkList class
 */
class LinkedList {
  constructor() {
    this.head = null;
  }
  add(data) {
    const node = new Node(data);
    node.next = this.head;
    this.head = node;
  }
  pop() {
    this.head = this.head.next;
  }
  show() {
    let cur = this.head;
    let list = '';
    while (true) {
      list += cur.data + ' -> ';
      if (!cur.next) {
        break;
      }
      cur = cur.next;
    }
    console.log(list);
  }

  printReverse(list) {
    if (list.next) {
      this.printReverse(list.next);
    }

    console.log('=>', list.data);
}

}

const linkedList = new LinkedList();

linkedList.add(4);
linkedList.add(3);
linkedList.add(2);
linkedList.add(1);
linkedList.show();
linkedList.printReverse(linkedList.head);

// console.log(linkedList)
// linkedList.pop();
// console.log(linkedList)

/**
 * Find middle node of linked list
 * 
 * @param {*} linkedList 
 */
function findMiddle(linkedList) {
  //write your answer here!
  let fast = linkedList.head;
  let slow = linkedList.head;

  while(fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}

// console.log(findMiddle(linkedList).data);

// linkedList.add(4);
// // linkedList.add(5);
// linkedList.show();
// function printReverseList(list) {
//   console.log(list.head);
//   if (list.head.next) {
//     printReverseList(list.head.next);
//   }

//   console.log('=>', list.head.data);
// }

// printReverseList(linkedList);