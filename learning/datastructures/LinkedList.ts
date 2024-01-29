class MyNode {
  val: number;
  next: MyNode | null;
  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

class MyLinkedList {
  head: MyNode | null;
  length: number;
  constructor() {
    this.head = null;
    this.length = 0;
  }

  get(index: number): number {
    if (index < 0 || index >= this.length) {
      return -1;
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current!.next;
    }

    return current!.val;
  }

  addAtHead(val: number): void {
    const newNode = new MyNode(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  addAtTail(val: number): void {
    const newNode = new MyNode(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }

    this.length++;
  }

  addAtIndex(index: number, val: number): void {
    if (index < 0 || index > this.length) {
      return;
    }

    if (index === 0) {
      this.addAtHead(val);
    } else if (index === this.length) {
      this.addAtTail(val);
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current!.next;
      }

      const newNode = new MyNode(val);
      newNode.next = current!.next;
      current!.next = newNode;

      this.length++;
    }
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.length) {
      return;
    }

    if (index === 0) {
      this.head = this.head!.next;
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current!.next;
      }

      current!.next = current!.next!.next;
    }

    this.length--;
  }
}
