import { Node } from './nodeClass.js';
import { ILinkedList } from '../types/LinkedListType';

export class LinkedList<T> implements ILinkedList<T> {
    private head: Node<T> | null = null;
    private tail: Node<T> | null = null;
    private len = 0;
  
    append(value: T): void {
      const node = new Node(value);
      if (!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        this.tail!.next = node;
        node.prev = this.tail;
        this.tail = node;
      }
      this.len++;
    }
  
    insert(value: T, idx: number): void {
      if (idx < 0 || idx > this.len) throw new RangeError('Index out of bounds');
      if (idx === this.len) return this.append(value);
  
      const node = new Node(value);
      if (idx === 0) {
        node.next = this.head;
        this.head!.prev = node;
        this.head = node;
      } else {
        let curr = this.head!;
        for (let i = 0; i < idx; i++) curr = curr.next!;
        node.prev = curr.prev;
        node.next = curr;
        curr.prev!.next = node;
        curr.prev = node;
      }
      this.len++;
    }
  
    delete(idx: number): T {
      if (idx < 0 || idx >= this.len) throw new RangeError('Index out of bounds');
      let curr = this.head!;
      for (let i = 0; i < idx; i++) curr = curr.next!;
      if (curr.prev) curr.prev.next = curr.next; else this.head = curr.next;
      if (curr.next) curr.next.prev = curr.prev; else this.tail = curr.prev;
      this.len--;
      return curr.value;
    }
  
    deleteAll(value: T): void {
      let curr = this.head;
      while (curr) {
        const next = curr.next;
        if (Object.is(curr.value, value)) {
          if (curr.prev) curr.prev.next = curr.next; else this.head = curr.next;
          if (curr.next) curr.next.prev = curr.prev; else this.tail = curr.prev;
          this.len--;
        }
        curr = next;
      }
    }
  
    get(idx: number): T {
      if (idx < 0 || idx >= this.len) throw new RangeError('Index out of bounds');
      let curr = this.head!;
      for (let i = 0; i < idx; i++) curr = curr.next!;
      return curr.value;
    }
  
    length(): number {
      return this.len;
    }
  
    clear(): void {
      this.head = null;
      this.tail = null;
      this.len = 0;
    }
  
    clone(): LinkedList<T> {
      const result = new LinkedList<T>();
      let curr = this.head;
      while (curr) {
        result.append(curr.value);
        curr = curr.next;
      }
      return result;
    }
  
    reverse(): LinkedList<T> {
      const result = new LinkedList<T>();
      let curr = this.tail;
      while (curr) {
        result.append(curr.value);
        curr = curr.prev;
      }
      return result;
    }
  
    findFirst(value: T): number {
      return this.find(value, true);
    }
  
    findLast(value: T): number {
      return this.find(value, false);
    }
  
    extend(other: ILinkedList<T>): void {
      let curr = other.toArray();
      for (let i = 0; i < curr.length; i++) {
        this.append(curr[i]);
      }
    }
  
    toArray(): T[] {
      const arr: T[] = [];
      let curr = this.head;
      while (curr) {
        arr.push(curr.value);
        curr = curr.next;
      }
      return arr;
    }
  
    forEach(fn: (value: T, index: number) => void): void {
      let curr = this.head;
      let idx = 0;
      while (curr) {
        fn(curr.value, idx++);
        curr = curr.next;
      }
    }
  
    map<U>(fn: (value: T, index: number) => U): LinkedList<U> {
      const result = new LinkedList<U>();
      let curr = this.head;
      let idx = 0;
      while (curr) {
        result.append(fn(curr.value, idx++));
        curr = curr.next;
      }
      return result;
    }
  
    filter(fn: (value: T, index: number) => boolean): LinkedList<T> {
      const result = new LinkedList<T>();
      let curr = this.head;
      let idx = 0;
      while (curr) {
        if (fn(curr.value, idx)) {
          result.append(curr.value);
        }
        curr = curr.next;
        idx++;
      }
      return result;
    }

    isEmpty(): boolean {
      return this.len === 0;
    }
  
    private find(value: T, first: boolean): number {
      let idx = 0;
      let found = -1;
      let curr = this.head;
      while (curr) {
        if (Object.is(curr.value, value)) {
          if (first) return idx;
          found = idx;
        }
        curr = curr.next;
        idx++;
      }
      return found;
    }
  }
  
 