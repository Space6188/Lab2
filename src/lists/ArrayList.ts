import { IArrayList } from '../types/ArrayListType';

export class ArrayList<T> implements IArrayList<T> {
    private items: T[] = [];
  
    append(value: T): void {
        this.items.push(value);
    }
    insert(value: T, idx: number): void {
        if (idx < 0 || idx > this.items.length) throw new RangeError('Index out of bounds');
        this.items.splice(idx, 0, value);
    }
    delete(idx: number): T {
        if (idx < 0 || idx >= this.items.length) throw new RangeError('Index out of bounds');
        return this.items.splice(idx, 1)[0];
    }
    deleteAll(value: T): void {
        this.items = this.items.filter(item => !Object.is(item, value));
    }
    get(idx: number): T {
        if (idx < 0 || idx >= this.items.length) throw new RangeError('Index out of bounds');
        return this.items[idx];
    }
    length(): number {
        return this.items.length;
    }
    clear(): void {
        this.items = [];
    }
    clone(): ArrayList<T> {
        const result = new ArrayList<T>();
        result.items = [...this.items];
        return result;
    }
    reverse(): ArrayList<T> {
        const result = new ArrayList<T>();
        result.items = [...this.items].reverse();
        return result;
    }
    findFirst(value: T): number {
        return this.items.findIndex(item => Object.is(item, value));
    }
    findLast(value: T): number {
        const idx = [...this.items].reverse().findIndex(item => Object.is(item, value));
        if (idx === -1) return -1;
        return this.items.length - 1 - idx;
    }
    extend(other: IArrayList<T>): void {
        this.items.push(...other.toArray());
    }
    toArray(): T[] {
        return [...this.items];
    }
    forEach(fn: (value: T, index: number) => void): void {
        this.items.forEach(fn);
    }
    map<U>(fn: (value: T, index: number) => U): ArrayList<U> {
        const result = new ArrayList<U>();
        result.items = this.items.map(fn);
        return result;
    }
    filter(fn: (value: T, index: number) => boolean): ArrayList<T> {
        const result = new ArrayList<T>();
        result.items = this.items.filter(fn);
        return result;
    }
    isEmpty(): boolean {
        return this.items.length === 0;
    }
}
  