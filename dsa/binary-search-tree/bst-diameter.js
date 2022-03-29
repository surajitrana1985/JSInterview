import { BinarySearchTree } from './impl/binary-search-tree.js';

/**
 * Binary Search Tree Visualization
 *                    20
 *                   / \
 *                  /   \
 *                 /     \
 *                1      30
 *                      /  \
 *                     /    \
 *                    25    40
 *                     \     \
 *                      \     \
 *                      26    50
 *                       \     \
 *                        \     \
 *                        27    60
 */

const sequence = [20, 30, 1, 25, 40, 50, 60, 26, 27];
const bst = new BinarySearchTree();
sequence.forEach(item => {
    bst.insert(item);
});

bst.printList();

const heightOfNode = (node, direction) => {
    let height = 0;
    let currentNode = node;
    while (currentNode && currentNode[direction]) {
        height++;
        currentNode = currentNode[direction];
    }
    return height;
};

console.log('Height of BST node left:', heightOfNode(bst.root, 'left'));
console.log('Height of BST node right:', heightOfNode(bst.root, 'right'));


const diameterOfBST = (root) => {
    let max = 0;
    const traverse = (node) => {
        if (!node) { return 0; }
        const lh = traverse(node.left);
        const rh = traverse(node.right);
        max = Math.max(max, lh + rh + 1);
        return 1 + Math.max(lh, rh);
    };
    traverse(root);
    return max;
};

console.log('Diameter of BST:', diameterOfBST(bst.root));
