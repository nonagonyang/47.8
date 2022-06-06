/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if(!this.root){
      return 0
    }
    let sumAll=0;
    let toVisitStack=[this.root]
    while (toVisitStack.length){
      let currentNode=toVisitStack.pop()
      sumAll=sumAll+currentNode.val
      for(let child of currentNode.children){
        toVisitStack.push(child)
      }
    }
    return sumAll
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if(!this.root){
      return 0
    }
    let count=0;
    let toVisitStack=[this.root]
    while(toVisitStack.length){
      let currentNode=toVisitStack.pop()
      if (currentNode.val%2===0){
        count++
      }
      for(let child of currentNode.children){
        toVisitStack.push(child)
      }
    }
    return count

  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if(!this.root){
      return 0
    }
    let count=0
    let toVisitStack=[this.root]
    while(toVisitStack.length){
      let currentNode=toVisitStack.pop()
      if (currentNode.val > lowerBound){
        count=count+1
      }
      for (let child of currentNode.children){
        toVisitStack.push(child)
      }
    }
    return count
  }
}

module.exports = { Tree, TreeNode };
