import { Base } from "../interfaces/base.interface";
import { Node } from "./node";

export class Pointer<T extends Base> {
  private node: Node<T> | undefined;

  public static from<T extends Base>(pointer: Pointer<T>): Pointer<T> {
    const copy = new Pointer<T>();
    copy.pointTo(pointer.node)
    return copy;
  }

  public pointTo(node: Node<T> | undefined) {
    this.node = node;
  }

  public getNode(): Node<T> | undefined {
    return this.node;
  }

  public putAsNext(node: Node<T>) {
    this.node.putAsNext(node);
  }

  public goToNextNode() {
    this.node = this.node.next?.getNode();
  }

  public nodeIsNull() {
    return this.node === undefined;
  }

  public nextNodeIsNull() {
    return this.node?.nextIsNull();
  }

  public getIdFromNode(): number | undefined {
    return this.node?.data.id;
  }
}