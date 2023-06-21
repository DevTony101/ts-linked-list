import { Base } from "../interfaces/base.interface";
import { List } from "../interfaces/list.interface";
import { Node } from "./node";
import { Pointer } from "./pointer";

export class LinkedList<T extends Base> implements List<T> {

  private head: Pointer<T>;
  private tail: Pointer<T>;
  private size: number;

  constructor(elements?: T[]) {
    this.head = new Pointer();
    this.tail = new Pointer();
    this.size = 0;
    this.init(elements);
  }

  private init(elements: T[]) {
    if (!elements) return;
    elements.forEach(this.append.bind(this));
  }

  // -----------------
  // Create
  public append(data: T): void {
    const node = new Node(data, undefined);
    if (this.size === 0) {
      this.head.pointTo(node);
      this.tail.pointTo(node);
    } else {
      this.tail.putAsNext(node);
      this.tail.pointTo(node);
    }
    this.size++;
  }

  prepend(data: T): void {
    const node = new Node(data, undefined);
    if (this.size === 0) {
      this.head.pointTo(node);
      this.tail.pointTo(node);
    } else {
      node.putAsNext(this.head.getNode());
      this.head.pointTo(node);
    }
    this.size++;
  }

  appendAt(data: T, index: number): void {
    if (index < 0 || index > this.size) {
      throw new Error("Index is not valid.");
    }

    if (index === 0) {
      this.prepend(data);
      return;
    }

    if (index === this.size) {
      this.append(data);
      return;
    }

    let i = 0;
    const auxPointer = Pointer.from(this.head);
    while (!auxPointer.nextNodeIsNull()) {
      
      if (i === index - 1) {
        const node = new Node(data, undefined);
        const nextPointer = Pointer.from(auxPointer);
        nextPointer.goToNextNode();
        auxPointer.putAsNext(node);
        node.putAsNext(nextPointer.getNode());
        this.size++;
        break;
      }

      i++;
      auxPointer.goToNextNode();
    }
  }

  // -----------------
  // Read
  print(): void {
    if (this.size > 0) {
      const auxPointer = Pointer.from(this.head);
      do {
        let data = `${auxPointer.getIdFromNode()} -> `;
        if (auxPointer.nextNodeIsNull()) data = `${data}NULL`;
        process.stdout.write(data);
        auxPointer.goToNextNode();
      } while (!auxPointer.nodeIsNull());
      console.log(`\n\nThe list has ${this.size} elements.`);
    }
  }

  get(index: number): Node<T> {
    if (index < 0 || index > this.size) {
      throw new Error("Index is not valid.");
    }

    if (index === 0) {
      return this.head.getNode();
    }

    if (index === this.size - 1) {
      return this.tail.getNode();
    }

    let i = 0;
    const auxPointer = Pointer.from(this.head);
    while (!auxPointer.nextNodeIsNull()) {
      if (i === index) return auxPointer.getNode();
      i++;
      auxPointer.goToNextNode();
    }
  }

  find(fn: (node: Node<T>) => boolean): T[] {
    const result: T[] = [];
    const auxPointer = Pointer.from(this.head);
    while (!auxPointer.nodeIsNull()) {
      const node = auxPointer.getNode();
      if (fn(node)) {
        result.push(node.data);
      }
      auxPointer.goToNextNode();
    }
    return result;
  }

  getSize(): number {
    return this.size;
  }

  // -----------------
  // Update
  update(data: T, index: number): void {
    const node = this.get(index);
    node.data = data;
  }

  // -----------------
  // Delete
  pop(): T {
    if (this.size === 1) {
      const node = this.tail.getNode();
      this.head = new Pointer();
      this.tail = new Pointer();
      this.size--;
      return node.data;
    }
    
    let i = 0;
    const auxPointer = Pointer.from(this.head);
    while (!auxPointer.nextNodeIsNull()) {
      if (i === this.size - 1) {
        const node = this.tail.getNode();
        auxPointer.putAsNext(undefined);
        this.tail.pointTo(auxPointer.getNode());
        this.size--;
        return node.data;
      }
      i++;
      auxPointer.goToNextNode();
    }
  }

  unshift(): T {
    const node = this.head.getNode();
    if (!node.nextIsNull()) {
      this.head.pointTo(node.getNext().getNode());
    } else {
      this.head = new Pointer();
      this.tail = new Pointer();
    }
    this.size--;
    return node.data;
  }

  delete(index: number): T {
    if (index < 0 || index > this.size) {
      throw new Error("El índice no es válido!!");
    }

    if (index === 0) {
      return this.unshift();
    }

    if (index === this.size - 1) {
      return this.pop();
    }

    let i = 0;
    const auxPointer = Pointer.from(this.head);
    while (!auxPointer.nextNodeIsNull()) {
      if (i === index - 1) {
        const node = auxPointer.getNode();
        const nextNode = node.getNext().getNode();
        auxPointer.putAsNext(node.getNext().getNode().getNext().getNode());
        this.size--;
        return nextNode.data;
      }
      i++;
      auxPointer.goToNextNode();
    }
  }
}