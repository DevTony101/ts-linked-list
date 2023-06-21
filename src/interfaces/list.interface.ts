import { Base } from "./base.interface";
import { Node } from "../classes/node";

export interface List<T extends Base> { // ADT

  // Create
  append(data: T): void;
  prepend(data: T): void;
  appendAt(data: T, index: number): void;

  // Read
  print(): void;
  get(index: number): Node<T>;
  find(fn: (node: Node<T>) => boolean): Array<T>;
  getSize(): number;

  // Update
  update(data: T, index: number): void;

  // Delete
  pop(): T;
  unshift(): T;
  delete(index: number): T;
}