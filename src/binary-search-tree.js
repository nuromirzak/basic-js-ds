const {NotImplementedError} = require('../extensions/index.js');

const {Node} = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
    /**
     *
     * @type {Node|null}
     */
    rootNode = null;

    root() {
        return this.rootNode;
    }

    add(data, node = this.rootNode) {
        if (!node) {
            this.rootNode = new Node(data);
        } else {
            if (data < node.data) {
                if (node.left === null) {
                    node.left = new Node(data);
                } else {
                    this.add(data, node.left);
                }
            } else {
                if (node.right === null) {
                    node.right = new Node(data);
                } else {
                    this.add(data, node.right);
                }
            }
        }
    }

    has(data, node = this.rootNode) {
        if (!node) return false;
        if (data === node.data) return true;
        return data < node.data ? this.has(data, node.left) : this.has(data, node.right);
    }

    find(data, node = this.rootNode) {
        if (!node) return null;
        if (data === node.data) return node;
        return data < node.data ? this.find(data, node.left) : this.find(data, node.right);
    }

    remove(data, node = this.rootNode, parentNode = null) {
        if (!node) return null;
        if (data < node.data) {
            return this.remove(data, node.left, node);
        } else if (data > node.data) {
            return this.remove(data, node.right, node);
        } else {
            if (node.left && node.right) {
                node.data = this.min(node.right);
                this.remove(node.data, node.right, node);
            } else if (parentNode === null) {
                this.rootNode = node.left || node.right;
            } else if (parentNode.left === node) {
                parentNode.left = node.left || node.right;
            } else {
                parentNode.right = node.left || node.right;
            }
        }
    }


    min(node = this.rootNode) {
        if (!node) return null;
        while (node.left) node = node.left;
        return node.data;
    }

    max(node = this.rootNode) {
        if (!node) return null;
        while (node.right) node = node.right;
        return node.data;
    }
}

module.exports = {
    BinarySearchTree
};