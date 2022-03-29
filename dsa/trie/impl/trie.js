import treeify from 'treeify';

export class Trie {

    constructor() {
        this.root = new TrieNode('');
    }

    insert(word) {
        if (!word) return null;
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (!node.children.hasOwnProperty(char)) {
                node.children[char] = new TrieNode(char);
            }
            node = node.children[char];
            if (i === word.length - 1) {
                node.isWord = true;
            }
        }
    }

    autocomplete(fragment) {
        const result = [];
        if (!fragment) return null;
        let node = this.root;
        for (let i = 0; i < fragment.length; i++) {
            const char = fragment[i];
            if (!node.children.hasOwnProperty(char)) {
                break;
            }
            node = node.children[char];
            if (i === fragment.length - 1) {
                const queue = [];
                queue.push([node, fragment]);
                while(queue.length) {
                    const element = queue.shift();
                    const currentNode = element[0];
                    const word = element[1];
                    if (currentNode.isWord) {
                        result.push(word);
                    }
                    for (const j in currentNode.children) {
                        const child = currentNode.children[j];
                        queue.push([child, word + child.value]);
                    }
                }
            }
        }
        return result;
    }

    printTrie() {
        console.log(treeify.asTree(this.root, true));
    }

}

class TrieNode {
    constructor(value, children = {}, isWord = false) {
        this.value = value;
        this.children = children;
        this.isWord = isWord;
    }
}

const trie = new Trie();
trie.insert('DOG');
trie.insert('DOOR');
trie.insert('DOORAT');
trie.insert('POOR');
trie.printTrie();

let results = trie.autocomplete('D');
console.log('Autocomplete search results:', results);

results = trie.autocomplete('DO');
console.log('Autocomplete search results:', results);

results = trie.autocomplete('DOO');
console.log('Autocomplete search results:', results);

results = trie.autocomplete('P');
console.log('Autocomplete search results:', results);

results = trie.autocomplete('PO');
console.log('Autocomplete search results:', results);

results = trie.autocomplete('RA');
console.log('Autocomplete search results:', results);
