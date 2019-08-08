class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {        
        this.root = this._insertNode(this.root, value);
    }

    _insertNode(node, value) {
        if(node === null) {  
            return new Node(value);
        } else if(node.value >= value) {
            node.left = this._insertNode(node.left, value);
        } else {
            node.right = this._insertNode(node.right, value); 
        }
        return node;                
    }

    insert2(value) {
        this.root = this._insertNode2(this.root, value);
    }

    _insertNode2(node, value) {
        if(node === null) {
            return new Node(value);
        } 
        if(value <= node.value) {
            node.left = this._insertNode2(node.left, value);
        } else if(value > node.value) {
            node.right = this._insertNode2(node.right, value);
        }         
        return node;
    }

    insertNonRecursive(value) {
        const newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while(true) {
                if(value < currentNode.value) {
                    if(!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    if(!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    traverse() {
        this._traverse(this.root);
    }

    _traverse(node) {
        if(node != null) {
            this._traverse(node.left);
            console.log(node.value);
            this._traverse(node.right);
        }
    }

    lookup(value) {
        return this._lookup(this.root, value);
    }

    _lookup(node, value) {
        if(node === null) {
            return false;
        } else {
            if(node.value > value) {
                return this._lookup(node.left, value);
            } else if(node.value < value) {
                return this._lookup(node.right, value);
            } else {
                return true;
            }
        }
    }

    lookupNonRecursive(value) {
        let currentNode = this.root;
        while(true) {
            if(!currentNode) {
                return false;
            } else if(value < currentNode.value) {
                currentNode = currentNode.left;
            } else if(value > currentNode.value) {
                currentNode = currentNode.right;
            } else {
                return true;
            }
        }
    }

    delete(value) {
        this.root = this._delete(this.root, value);
    }

    _delete(node, value) {
        if(node === null) {
            return null;
        } else if(value < node.value){
            node.left = this._delete(node.left, value);
        } else if(value > node.value) {
            node.right = this._delete(node.right, value);
        } else {
            if(node.left === null && node.right === null) {
                node = null;
            } else if(node.left === null) {
                node = node.right;
            } else if(node.right === null) {
                node = node.left;
            } else {
                let rightMin = this._min(node.right);
                node.value = rightMin.value;
                node.right = this._delete(node.right, node.value);
            }
        }
        return node;
    }

    min() {
        let res = this._min(this.root);
        if(res != null) {
            return res.value;
        }
    }

    _min(node) {
        if(node == null || node.left == null) {
            return node;
        } else {
        return this._min(node.left);   
        }    
    }

    maxDepth() {
        if(this.root !== null) {
            return this. _maxDepth(this.root, 0, 0);
        } else {
            return 0;
        }
    }

    _maxDepth(node, leftDepth, rightDepth) {
        if(node.left !== null) {
            leftDepth = this._maxDepth(node.left, ++leftDepth, rightDepth);
        }
        if(node.right !== null) {
            rightDepth = this._maxDepth(node.right, leftDepth, ++rightDepth);
        }
        return leftDepth >= rightDepth ? leftDepth : rightDepth;
    }

    breadthFirstSearch() {
        let currentNode = this.root;
        let resultList = [];
        let queue = [];
        queue.push(currentNode);
        while(queue.length > 0) {
            currentNode = queue.shift();
            resultList.push(currentNode.value);
            if(currentNode.left) {
                queue.push(currentNode.left);
            }
            if(currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        return resultList;
    }

    breadthFirstSearchR(queue, resultList) {
        if(queue.length === 0) {
            return resultList;
        }
        let currentNode = queue.shift();
        resultList.push(currentNode.value);
        if(currentNode.left) {
            queue.push(currentNode.left);
        }
        if(currentNode.right) {
            queue.push(currentNode.right);
        }
        return this.breadthFirstSearchR(queue, resultList);
    }
    
    inOrderDFS() {
        return this.traverseInOrder(this.root, []);
    }

    postOrderDFS() {
        return this.traversePostOrder(this.root, []);
    }

    preOrderDFS() {
        return this.traversePreOrder(this.root, []);
    }

    traverseInOrder(node, list) {
        if(node !== null) {
            this.traverseInOrder(node.left, list);
            list.push(node.value);
            this.traverseInOrder(node.right, list);
        }
        return list;
    }

    traversePreOrder(node, list) {
        if(node !== null) {
            list.push(node.value);
            this.traversePreOrder(node.left, list);
            this.traversePreOrder(node.right, list);
        }
        return list;
    }

    traversePostOrder(node, list) {
        if(node !== null) {
            this.traversePostOrder(node.left, list);
            this.traversePostOrder(node.right, list);
            list.push(node.value);
        }
        return list;
    }
}

var myTree = new BST();
myTree.insertNonRecursive(9);
myTree.insert(4);
myTree.insertNonRecursive(20);
myTree.insertNonRecursive(1);
myTree.insertNonRecursive(6);
myTree.insertNonRecursive(15);
myTree.insertNonRecursive(170);
console.log('InOrderDFS: ');
console.log(myTree.inOrderDFS());
console.log('PreOrderDFS: ');
console.log(myTree.preOrderDFS());
console.log('PostOrderDFS: ');
console.log(myTree.postOrderDFS());


