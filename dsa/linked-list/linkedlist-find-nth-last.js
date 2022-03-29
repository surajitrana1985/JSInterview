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

const findNthNodeFromLast = (list, index) => {
    let slow = list.head, fast = getFastNode(slow, index);
    if (!fast) {
        return null;
    }
    while (slow && fast) {
        slow = slow.next;
        fast = getFastNode(slow, index);
    }
    return slow;
};

const getFastNode = (slow, n) => {
    let fastNode = slow;
    for (let i = 0; i < n; i++) {
        if (fastNode && fastNode['next']) {
            fastNode = fastNode['next'];
        } else {
            fastNode = null;
            break;
        }
    }
    return fastNode;
};

const nthNode = findNthNodeFromLast(list, 3);
console.log('Nth Node from last: ', nthNode);

const shortList = new SinglyLinkedList();
seq = [10, 100, 1000];
seq.forEach(item => {
    shortList.prepend(item);
});

shortList.printList();
const sortNthNode = findNthNodeFromLast(shortList, 5);
console.log('Nth Node from last: ', sortNthNode);
