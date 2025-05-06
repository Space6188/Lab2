import { LinkedList } from '../lists/linkedList.js';

describe('LinkedList', () => {
  let list: LinkedList<number>;

  beforeEach(() => {
    list = new LinkedList<number>();
  });

  test('append and toArray', () => {
    list.append(1);
    list.append(2);
    list.append(3);
    expect(list.toArray()).toEqual([1, 2, 3]);
  });

  test('insert at head', () => {
    list.append(2);
    list.insert(1, 0);
    expect(list.toArray()).toEqual([1, 2]);
  });

  test('insert at tail', () => {
    list.append(1);
    list.insert(2, 1);
    expect(list.toArray()).toEqual([1, 2]);
  });

  test('insert in the middle', () => {
    list.append(1);
    list.append(3);
    list.insert(2, 1);
    expect(list.toArray()).toEqual([1, 2, 3]);
  });

  test('delete', () => {
    list.append(1);
    list.append(2);
    list.append(3);
    expect(list.delete(1)).toBe(2);
    expect(list.toArray()).toEqual([1, 3]);
  });

  test('deleteAll', () => {
    list.append(1);
    list.append(2);
    list.append(1);
    list.append(3);
    list.deleteAll(1);
    expect(list.toArray()).toEqual([2, 3]);
  });

  test('get', () => {
    list.append(10);
    list.append(20);
    expect(list.get(1)).toBe(20);
  });

  test('length', () => {
    expect(list.length()).toBe(0);
    list.append(1);
    expect(list.length()).toBe(1);
  });

  test('clear', () => {
    list.append(1);
    list.clear();
    expect(list.length()).toBe(0);
    expect(list.toArray()).toEqual([]);
  });

  test('clone', () => {
    list.append(1);
    list.append(2);
    const clone = list.clone();
    expect(clone.toArray()).toEqual([1, 2]);
    clone.append(3);
    expect(list.toArray()).toEqual([1, 2]);
    expect(clone.toArray()).toEqual([1, 2, 3]);
  });

  test('reverse', () => {
    list.append(1);
    list.append(2);
    list.append(3);
    const rev = list.reverse();
    expect(rev.toArray()).toEqual([3, 2, 1]);
  });

  test('findFirst', () => {
    list.append(1);
    list.append(2);
    list.append(1);
    expect(list.findFirst(1)).toBe(0);
    expect(list.findFirst(2)).toBe(1);
    expect(list.findFirst(3)).toBe(-1);
  });

  test('findLast', () => {
    list.append(1);
    list.append(2);
    list.append(1);
    expect(list.findLast(1)).toBe(2);
    expect(list.findLast(2)).toBe(1);
    expect(list.findLast(3)).toBe(-1);
  });

  test('extend', () => {
    list.append(1);
    const other = new LinkedList<number>();
    other.append(2);
    other.append(3);
    list.extend(other);
    expect(list.toArray()).toEqual([1, 2, 3]);
  });

  test('forEach', () => {
    list.append(1);
    list.append(2);
    const arr: number[] = [];
    list.forEach((v: number, i: number) => arr.push(v + i));
    expect(arr).toEqual([1, 3]);
  });

  test('map', () => {
    list.append(1);
    list.append(2);
    const mapped = list.map((v: number) => v * 2);
    expect(mapped.toArray()).toEqual([2, 4]);
  });

  test('filter', () => {
    list.append(1);
    list.append(2);
    list.append(3);
    const filtered = list.filter((v: number) => v % 2 === 1);
    expect(filtered.toArray()).toEqual([1, 3]);
  });

  test('isEmpty', () => {
    expect(list.isEmpty()).toBe(true);
    list.append(1);
    expect(list.isEmpty()).toBe(false);
    list.clear();
    expect(list.isEmpty()).toBe(true);
  });

  test('throws on get out of bounds', () => {
    expect(() => list.get(0)).toThrow(RangeError);
    list.append(1);
    expect(() => list.get(1)).toThrow(RangeError);
  });

  test('throws on insert out of bounds', () => {
    expect(() => list.insert(1, 1)).toThrow(RangeError);
    expect(() => list.insert(1, -1)).toThrow(RangeError);
  });

  test('throws on delete out of bounds', () => {
    expect(() => list.delete(0)).toThrow(RangeError);
    list.append(1);
    expect(() => list.delete(1)).toThrow(RangeError);
  });
});
