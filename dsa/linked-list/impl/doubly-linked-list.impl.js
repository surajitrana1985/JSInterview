import { DoublyLinkedList } from './doubly-linked-list.js';

const sequence = [1, 2, 3, 4, 5, 6, 7];
const list = new DoublyLinkedList();
sequence.forEach(item => {
    // list.append(item);
    list.prepend(item);
});

list.printList();
console.log('Size of the list ', list.getSize());

list.deleteHead();
list.printList();
console.log('Size of the list ', list.getSize());

list.deleteTail();
list.printList();
console.log('Size of the list ', list.getSize());

const { node, index } = list.searchNode(4);
console.log('Searched node', node.value, 'is found at index:', index);
