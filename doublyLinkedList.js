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
    if (!this.head) return undefined;
    var poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  shift() {
    if (this.length == 0) return undefined;
    let oldHead = this.head;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    if (index <= this.length / 2) {
      let counter = 0;
      let current = this.head;
      while (index != counter) {
        counter++;
        current = current.next;
      }
      return current;
    } else {
      let counter = this.length - 1;
      let current = this.tail;
      while (index != counter) {
        counter--;
        current = current.prev;
      }
      return current;
    }
  }
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode != null) {
      current.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index > this.length || index < 0) return false;
    if (index == 0) {
      this.unshift(val);
    } else if (index == this.length - 1) {
      this.push(val);
    } else {
      let newNode = new Node(val);
      let foundNode = this.get(index);
      let prevNode = foundNode.prev;
      prevNode.next = newNode;
      newNode.prev = prevNode;
      newNode.next = foundNode;
      foundNode.prev = newNode;
      this.length++;
      return true;
    }
  }
}
let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);
