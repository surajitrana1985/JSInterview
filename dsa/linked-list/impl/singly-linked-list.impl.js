import { SinglyLinkedList } from './singly-linked-list.js';

const list = new SinglyLinkedList();
let seq = [12, 14, 16, 18, 20];

seq.forEach(item => {
    list.append(item);
});

list.printList();

seq = [10, 8, 6, 4, 2, 0];
seq.forEach(item => {
    list.prepend(item);
});

list.printList();

console.log('Size of the list:', list.getSize());

console.log('Searched node for value 14: ', list.searchNode(14));
