import { LinkedList } from './lists/linkedList';

const ll = new LinkedList<string>();
ll.append('a');
ll.append('b');
ll.insert('start', 0);
console.log('List:', ll.toArray());
