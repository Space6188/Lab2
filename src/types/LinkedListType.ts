export interface ILinkedList<T> {
  append(value: T): void;
  insert(value: T, idx: number): void;
  delete(idx: number): T;
  deleteAll(value: T): void;
  get(idx: number): T;
  length(): number;
  clear(): void;
  clone(): ILinkedList<T>;
  reverse(): ILinkedList<T>;
  findFirst(value: T): number;
  findLast(value: T): number;
  extend(other: ILinkedList<T>): void;
  toArray(): T[];
  forEach(fn: (value: T, index: number) => void): void;
  map<U>(fn: (value: T, index: number) => U): ILinkedList<U>;
  filter(fn: (value: T, index: number) => boolean): ILinkedList<T>;
  isEmpty(): boolean;
} 