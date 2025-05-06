export class Node<T> {
    value: T;
    prev: Node<T> | null = null;
    next: Node<T> | null = null;
    constructor(v: T) { this.value = v; }
  }