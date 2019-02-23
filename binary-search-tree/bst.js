/**
 * Binary Search Tree (left branch =  min && right branch = max)
 * Methods
 * 1 - add
 * 2 - remove
 * 3 - findMin
 * 4 - findMax
 * 5 - find
 * 6 - isPresent
 * 7 - isBalanced
 * 8 - findMinHeight
 * 9 - findMaxHeight
 * 10 - inOrder
 * 11 - postOrder
 * 12 - levelOrder
 */

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(data) {
    const node = this.root;
    // if (tree is empty)
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      /**
       * search through tree
       * if less the make a node on left
       * lese make the node on the right
       */
      const searchTree = (node) => {
        if (data < node.data) {
          // set the data in the left branch
          // because the data is less than then the parent node
          if (!node.left) {
            node.left = new Node(data);
            return;
          } else {
            return searchTree(node.left);
          }
        }
        // set the data in the right branch
        // because the data is greater than then the parent node
        if (data > node.data) {
          if (!node.right) {
            node.right = new Node(data);
            return;
          } else {
            return searchTree(node.right);
          }
        }
        if (data === node.data) {
          return null;
        }
      };
      return searchTree(node);
    }
  }

  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current;
  }

  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current;
  }

  remove(item) {
    const removeNode = (node, data) => {
      if (node === null) {
        return null;
      }

      if (data === node.data) {
        // if not child is there
        if (node.right === null && node.left === null) {
          return null;
        }

        // if node has to no right child
        if (node.right === null) {
          return node.left;
        }

        // if node has no left child
        if (node.left === null) {
          return node.right;
        }

        // if node has not node
        let tmpNode = node.right;
        if (tmpNode.left !== null) {
          tmpNode = tmpNode.left;
        }
        node.data = tmpNode.data;
        node.right = removeNode(node.right, tmpNode.data);
        return node;
      } else if (data < node.data) { // if data is smaller that parent then it in it's left
        node.left = removeNode(node.left, data);
        return node;
      } else { // if data is greater that parent then it in it's right 
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    removeNode(this.root, item);
  }

  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }

      if (current == null) {
        return null;
      }
    }
    return current;
  }

  isPresent(data) {
    let currentItem = this.root;
    while (currentItem) {
      if (data === currentItem.data) return true;
      if (data < currentItem.data) {
        currentItem = currentItem.left;
      } else {
        currentItem = currentItem.right;
      }
    }
    return false;
  }
}

const bst = new BST();

bst.add(5);
bst.add(4);
bst.add(3);
bst.add(6);
bst.add(2);
bst.remove(5);
bst.add(5);

console.log(bst.findMax());
console.log(bst.findMin());
console.log(bst.find(2));
console.log(bst.isPresent(9));
console.log(bst.isPresent(2));

console.log(bst.root);
