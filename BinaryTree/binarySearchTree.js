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
    
}

var myTree = new BST();
myTree.insert2(10);
myTree.insert2(15);
myTree.insert2(5);
myTree.insert2(66);
myTree.traverse();
console.log(myTree.lookup(66));


