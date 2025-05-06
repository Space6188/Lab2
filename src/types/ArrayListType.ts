export interface IArrayList<T> {
  append(value: T): void;
  insert(value: T, idx: number): void;
  delete(idx: number): T;
  deleteAll(value: T): void;
  get(idx: number): T;
  length(): number;
  clear(): void;
  clone(): IArrayList<T>;
  reverse(): IArrayList<T>;
  findFirst(value: T): number;
  findLast(value: T): number;
  extend(other: IArrayList<T>): void;
  toArray(): T[];
  forEach(fn: (value: T, index: number) => void): void;
  map<U>(fn: (value: T, index: number) => U): IArrayList<U>;
  filter(fn: (value: T, index: number) => boolean): IArrayList<T>;
  isEmpty(): boolean;
} 