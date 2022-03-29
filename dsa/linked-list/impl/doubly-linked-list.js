import treeify from 'treeify';

export class DoublyLinkedList {
    constructor() {
        this.head = this.tail = null;
        this.size = 0;
    }

    append(value) {
        if (!this.tail) {
            this.head = this.tail = new Node(value);
        } else {
            const oldTail = this.tail;
            this.tail = new Node(value);
            oldTail.next = this.tail;
            this.tail.prev = oldTail;
        }
        this.size++;
    }

    prepend(value) {
        if (!this.head) {
            this.head = this.tail = new Node(value);
        } else {
            const oldHead = this.head;
            this.head = new Node(value);
            oldHead.prev = this.head;
            this.head.next = oldHead;
        }
        this.size++;
    }

    deleteHead() {
        if (!this.head) {
            return null;
        }
        const deletedHead = this.head;
        // if this having only 1 element
        if (this.head === this.tail) {
            this.head = this.tail = null;
        } else {
            this.head = deletedHead.next;
            this.head.prev = null;
        }
        this.size--;
        return deletedHead.value;
    }

    deleteTail() {
        if (!this.tail) {
            return null;
        }
        const deletedTail = this.tail;
        // if this having only 1 element
        if (this.head === this.tail) {
            this.head = this.tail = null;
        } else {
            this.tail = deletedTail.prev;
            this.tail.next = null;
        }
        this.size--;
        return deletedTail.value;
    }

    searchNode(value) {
        let currentNode = this.head;
        let index = 0;
        while (currentNode) {
            if (currentNode.value === value) {
                break;
            }
            currentNode = currentNode.next;
            index++;
        }
        return {
            node: currentNode,
            index
        };
    }

    getSize() {
        return this.size;
    }

    printList() {
        console.log(treeify.asTree(this, true));
    }
}

class Node {
    constructor(value, prev = null, next = null) {
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}
