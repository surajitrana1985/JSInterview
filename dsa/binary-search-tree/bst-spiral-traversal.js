import { BinarySearchTree } from './impl/binary-search-tree.js';

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

// Output: [15, 36, 3, 2, 12, 28, 39]

const traverseSpiralBST = function (bst) {
    const result = [];
    const traverse = (node, level) => {
        if (node === null) {
            return;
        }
        if (!result[level]) {
            result[level] = [];
        }
        level % 2 === 0 ?
            result[level].unshift(node.value) : result[level].push(node.value);
        if (node.right) {
            traverse(node.right, level + 1);
        }
        if (node.left) {
            traverse(node.left, level + 1);
        }
    };
    traverse(bst.root, 0);
    return result;
}

console.log('Spiral traversal of BST: ', traverseSpiralBST(bst));
