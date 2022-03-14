class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    let current = this.head;
    let newHead = this.head.next;
    this.head = newHead;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return current;
  }
  unshift(val) {
    let newHead = new Node(val);
    if (!this.head) {
      this.head = newHead;
      this.tail = this.head;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length++;
    return this;
  }
  get(num) {
    let counter = 0;
    let current = this.head;
    if (num < 0 || num >= this.length) return null;
    if (num == 0) return current;
    while (num < this.length) {
      if (counter == num) {
        return current;
      }
      counter++;
      current = current.next;
    }
    return null;
  }
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index == this.length) return this.push(val);
    if (index == 0) return this.unshift(val);

    let prev = this.get(index - 1);
    let now = this.get(index);
    let newNode = new Node(val);
    newNode.next = now;
    prev.next = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index == 0) return this.shift();
    if ((index = this.length - 1)) return this.pop();
    let prev = this.get(index - 1);
    let removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed;
  }
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
  revere() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let after;
    for (let i = 0; i < this.length; i++) {
      after = node.next;
      node.next = prev;
      prev = node;
      node = after;
    }
    return this;
  }
}

let list = new SinglyLinkedList();
list.push(50);
list.push(51);
list.push(52);
list.push(53);
list.push(54);
list.push(55);
