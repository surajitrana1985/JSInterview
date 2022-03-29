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

const heightOfBST = (node) => {
    let height = 0;
    const queue = [];
    queue.push({ node, level: 1 });
    while (queue.length) {
        const currentNode = queue.shift();
        height = currentNode.level;
        if (currentNode.node.left) {
            queue.push({ node: currentNode.node.left, level: height + 1 });
        }
        if (currentNode.node.right) {
            queue.push({ node: currentNode.node.right, level: height + 1 });
        }
    }
    return height;
};

console.log('Height of BST: ', heightOfBST(bst.root));


const heightOfNode = (node, direction) => {
    let height = 0;
    let currentNode = node;
    if (!currentNode) {
        return height;
    }
    while (currentNode && currentNode[direction]) {
        height++;
        currentNode = currentNode[direction];
    }
    return height;
};

console.log('Height of node left:', heightOfNode(bst.root, 'left'));
console.log('Height of node right:', heightOfNode(bst.root, 'right'));

const heightBST = (root) => {
    if (!root) return 0;
    return 1 + Math.max(heightBST(root.left), heightBST(root.right));
};

console.log('Height of BST: ', heightBST(bst.root));
