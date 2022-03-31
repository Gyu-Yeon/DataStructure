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
    // if no node exist new node == head and tail
    // head.next = new node.
    //

    if (this.length == 0) {
      let newNode = new Node(val);
    }
    let newNode = new Node(val);
    this.head.next = newNode;
    newNode.prev = this.head;
  }
}
