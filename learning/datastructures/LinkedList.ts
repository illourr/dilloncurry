type NodeVal = number;
class ListNode {
  val: NodeVal;
  next: ListNode | null;
  constructor(value: NodeVal) {
    this.val = value;
    this.next = null;
  }
}
class MyLinkedList {
  list: ListNode | null;
  constructor() {
    this.list = null;
  }
  valueOf() {
    return this.list;
  }

  get(index: number): number {
    let position = 0;
    let currentNode = this.list;
    while (position !== index && currentNode !== null) {
      currentNode = currentNode.next;
      position++;
    }
    if (position === index && currentNode !== null) {
      return currentNode.val;
    }
    return -1;
  }

  addAtHead(val: number): void {
    let next = this.list;
    const newNode = new ListNode(val);
    if (next !== null) {
      newNode.next = next;
    }
    this.list = newNode;
  }

  addAtTail(val: number): void {
    if (this.list == null) {
      return;
    }

    let currentNode = this.list;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = new ListNode(val);
  }

  addAtIndex(index: number, val: number): void {}

  deleteAtIndex(index: number): void {}
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

const list = new MyLinkedList();

list.addAtHead(2);
list.addAtTail(5);
list.addAtHead(1);
list.addAtTail(7);
list.addAtTail(9);

console.log(list.get(3));
