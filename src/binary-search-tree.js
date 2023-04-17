const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null
  }

  addNode(node, rootNode) {
    if (rootNode === null) {
      this.rootNode = node
      return;
    }
    let current = rootNode;
    while (current.data != node.data) {
      if (current.data > node.data) {
        if (current.left == null) {
          current.left = node
          return
        } else {
          current = current.left
        }
      }
      if (current.data < node.data) {
        if (current.right == null) {
          current.right = node
          return
        } else {
          current = current.right
        }
      }
    }
  }

  root() {
    return this.rootNode || null;
  }

  add(data) {
    this.addNode(new Node(data), this.rootNode)
  }

  has(data) {
    let current = this.rootNode;
    while (data != current.data) {
      if (data < current.data  && current.left === null) {
        return false
      }
      if (data > current.data && current.right === null) {
        return false
      }
      if ( data < current.data) {
        current = current.left
      }
      if ( data > current.data)  {
        current = current.right
      }
    }
    return true
  }

  find(data) {
    let current = this.rootNode;
    while (data != current.data) {
      if (data < current.data  && current.left === null) {
        return null
      }
      if (data > current.data && current.right === null) {
        return null
      }
      if ( data < current.data) {
        current = current.left
      }
      if ( data > current.data)  {
        current = current.right
      }
    }
    return current
  }

  remove(data) {
    if(this.rootNode == null){
      return
    }

    if (data == this.rootNode.data){
      let a = this.rootNode
      this.rootNode = null
      if(a.left != null){
        this.addNode(a.left)
      }
      if(a.right != null){
        this.addNode(a.right)
      }
    }


    let current = this.rootNode;
    let parent = null;

    while (data != current.data) {
      if (current == null){
        return
      }

      if (current.left == null && current.right == null){
        return
      }

      if (data < current.data) {
        parent = current
        current = current.left
      }
      if (data > current.data) {
        parent = current
        current = current.right
      }



    }


    if ( parent != null && current == parent.left) {
      if (current.left != null) {
        this.addNode(current.left, parent)
      }
      if (current.right != null) {
        this.addNode(current.right, parent)
      }
      if(current.left == null && current.right == null){
        parent.left == null
      }
    }

    if ( parent != null && current == parent.right) {
      if (current.left != null) {
        this.addNode(current.left, parent)
      }
      if (current.right != null) {
        this.addNode(current.right, parent)
      }
      if(current.left == null && current.right == null){
        parent.right == null
      }
    }
  }

  min() {
    if (this.rootNode == null){
      return null
    }
    let current = this.rootNode
    while (current.left != null){
      current = current.left
    }
    return current.data
  }

  max() {
    if (this.rootNode == null){
      return null
    }
    let current = this.rootNode
    while (current.right != null){
      current = current.right
    }
    return current.data
  }
}

module.exports = {
  BinarySearchTree
};