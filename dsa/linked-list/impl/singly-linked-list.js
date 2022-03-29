import treeify from 'treeify';

export class SinglyLinkedList {
    constructor() {
        this.head = this.tail = null;
        this.size = 0;
    }

    append(value) {
        this.size++;
        if (!this.tail) {
            this.head = this.tail = new Node(value);
        } else {
            const oldTail = this.tail;
            this.tail = new Node(value);
            oldTail.next = this.tail;
        }
    }

    prepend(value) {
        this.size++;
        if (!this.head) {
            this.head = this.tail = new Node(value);
        } else {
            const oldHead = this.head;
            this.head = new Node(value);
            this.head.next = oldHead;
        }
    }

    searchNode(value) {
        let currentNode = this.head;
        let searchedNode;
        while (currentNode) {
            if (currentNode.value === value) {
                searchedNode = currentNode;
                break;
            }
            currentNode = currentNode.next;
        }
        return searchedNode;
    }

    getSize() {
        return this.size;
    }

    printList() {
        console.log(treeify.asTree(this, true));
    }

}

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
