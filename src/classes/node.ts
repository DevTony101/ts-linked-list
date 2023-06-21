import { Base } from "../interfaces/base.interface";
import { Pointer } from "./pointer";

export class Node<T extends Base> {
  constructor(public data: T, public next: Pointer<T>) {}

  putAsNext(node: Node<T>) {
    this.next = undefined;
    if (node) {
      this.next = new Pointer();
      this.next.pointTo(node);
    }
  }

  getNext(): Pointer<T> {
    return this.next;
  }

  nextIsNull(): boolean {
    return this.next === undefined;
  }
}