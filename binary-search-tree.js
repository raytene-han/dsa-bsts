class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): Insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {

    let current = this.root;

    if (!current) {
      this.root = new Node(val);
      return this;
    }

    while (current) {
      if (val < current.val) {
        if (!current.left) {
          current.left = new Node(val);
          return this;
        } else {
          current = current.left;
        }
      } else {
        if (!current.right) {
          current.right = new Node(val);
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }

  /** insertRecursively(val): Insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node=this.root) {

    if (!this.root) {
      this.root = new Node(val);
      return this;
    }

    if (val < node.val) {
      if (node.left) {
        this.insertRecursively(val, node.left);
      } else {
        node.left = new Node(val);
        return this;
      }
    } else {
      if (node.right) {
        this.insertRecursively(val, node.right);
      } else {
        node.right = new Node(val);
        return this;
      }
    }
  }

  /** find(val): Search the tree for a node with value val.
   * Return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;

    if (!current) return;

    while (current) {
      if (val === current.val) return current;
      if (val < current.val) current = current.left;
      if (val > current.val) current = current.right;
    }
  }

  /** findRecursively(val): Search the tree for a node with value val.
   * Return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node=this.root) {
    if (!node) return;

    if (val === node.val) return node;
    if (val < node.val) return this.findRecursively(val, node.left);
    if (val > node.val) return this.findRecursively(val, node.right);

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node=this.root, out=[]) {
    if (!node) return out;

    out.push(node.val);
    this.dfsPreOrder(node.left, out);
    this.dfsPreOrder(node.right, out);

    return out;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node=this.root, out=[]) {
    if (!node) return out;

    this.dfsInOrder(node.left, out);
    out.push(node.val);
    this.dfsInOrder(node.right, out);

    return out;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node=this.root, out=[]) {
    if (!node) return out;

    this.dfsPostOrder(node.left, out);
    this.dfsPostOrder(node.right, out);
    out.push(node.val);

    return out;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {

  }

  /** findSuccessorNode(): Find the node with the next largest value.
   * Return successor node or undefined if not found. */

  findSuccessorNode(node) {

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }
}

module.exports = {
  BinarySearchTree,
  Node,
};
