import treeify from 'treeify';
import { SinglyLinkedList } from './impl/singly-linked-list.js';

const list = new SinglyLinkedList();

for (let i = 0; i < 20; i++) {
    list.append(i);
}

list.printList();

const reverseLinkedlistIterative = (list) => {
    let currentNode = list.head, prevNode = null;
    while (currentNode) {
        const tempNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = tempNode;
    }
    return prevNode;
};

const reverseList = reverseLinkedlistIterative(list);
console.log('Reverse of list:');
console.log(treeify.asTree(reverseList, true));
