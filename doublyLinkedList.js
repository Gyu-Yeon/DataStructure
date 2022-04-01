class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length == 0) {
      return undefined;
    } else if (this.length == 1) {
      let temp = this.head.val;
      this.head.next = null;
      this.head = null;
      this.tail = null;
      this.length--;
      return temp;
    } else {
      let temp = this.tail;
      this.tail.next = null;
      this.length--;
      return temp;
    }
  }
}
