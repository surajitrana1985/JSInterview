import treeify from 'treeify';

export class BinarySearchTree {

    constructor() {
        this.root = null;
        this.size = 0;
    }

    getSize() {
        return this.size;
    }

    insert(value) {
        this.size++;
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        const searchNode = (node) => {
            if (value < node.value) {                             // lookup left
                if (!node.left) {                             // no node at left
                    node.left = newNode;
                } else {
                    searchNode(node.left);
                }
            } else {                                             // lookup right
                if (!node.right) {                            // no node at left
                    node.right = newNode;
                } else {
                    searchNode(node.right);
                }
            }
        };
        searchNode(this.root);
    }

    printList() {
        console.log(treeify.asTree(this, true));
    }

    min() {
        let currentNode = this.root;
        while (currentNode.left) {
            currentNode = currentNode.left;
        }
        return currentNode.value;
    }

    max() {
        let currentNode = this.root;
        while (currentNode.right) {
            currentNode = currentNode.right;
        }
        return currentNode.value;
    }

    contains(value) {
        let currentNode = this.root;
        let searchedNode;
        while (currentNode) {
            if (currentNode.value === value) {
                searchedNode = currentNode;
                break;
            } else if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            }
        }
        return searchedNode;
    }

    /**
     * Depth first search
     */

    // In Order Traversal
    // left - root - right
    dfsInOrder() {
        const results = [];
        const traverse = (node) => {
            if (node.left) {
                traverse(node.left);
            }
            results.push(node.value);
            if (node.right) {
                traverse(node.right);
            }
        };
        traverse(this.root);
        return results;
    }

    // Pre-Order Traversal
    // root - left -right
    dfsPreOrder() {
        const results = [];
        const traverse = (node) => {
            results.push(node.value);
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
        };
        traverse(this.root);
        return results;
    }

    // Post-Order Traversal
    // left - right - root 
    dfsPostOrder() {
        const results = [];
        const traverse = (node) => {
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
            results.push(node.value);
        };
        traverse(this.root);
        return results;
    }

    /**
     * Breadth first search
     */
    bfs() {
        const results = [];
        const queue = [];
        queue.push(this.root);
        while (queue.length) {
            let currentNode = queue.shift();
            results.push(currentNode.value);
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        return results;
    }

}

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
