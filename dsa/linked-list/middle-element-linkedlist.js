import { SinglyLinkedList } from './impl/singly-linked-list.js';

const list = new SinglyLinkedList();
let seq = [12, 14, 16, 18, 20];

seq.forEach(item => {
    list.append(item);
});

seq = [10, 8, 6, 4, 2, 0];
seq.forEach(item => {
    list.prepend(item);
});

list.printList();

const middleOfLinkedlist = (list) => {
    let slow = list.head, fast = list.head;
    while (slow && fast && fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};

const middleNode = middleOfLinkedlist(list);
console.log('Middle Node of Linkedlist: ', middleNode);
