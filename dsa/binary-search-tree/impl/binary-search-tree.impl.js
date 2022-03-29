import { BinarySearchTree } from './binary-search-tree.js';

/**
 * Binary Search Tree Visualization
 *                    15
 *                   / \
 *                  /   \
 *                 /     \
 *                3      36
 *               /\     /  \
 *              /  \   /    \
 *             2   12 28    39
 */

const sequence = [15, 3, 2, 36, 12, 39, 28];
const bst = new BinarySearchTree();
sequence.forEach(item => {
    bst.insert(item);
});

bst.printList();

console.log('Minimum of BST: ', bst.min());
console.log('Maximum of BST: ', bst.max());
console.log('BST contains 36: ', bst.contains(36));

// [2,  3, 12, 15, 28, 36, 39]
const inOrder = bst.dfsInOrder();
console.log('In-Order traversal -> ', inOrder);

// [15,  3,  2, 12, 36, 28, 39]
const preOrder = bst.dfsPreOrder();
console.log('Pre-Order traversal -> ', preOrder);

// [2, 12,  3, 28, 39, 36, 15]
const postOrder = bst.dfsPostOrder();
console.log('Post-Order traversal -> ', postOrder);

// [15, 3, 36, 2, 12, 28, 39]
const bfsOrder = bst.bfs();
console.log('BFS traversal -> ', bfsOrder);
