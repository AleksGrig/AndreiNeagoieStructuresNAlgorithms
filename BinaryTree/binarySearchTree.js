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
    
}

var myTree = new BST();
myTree.insert2(10);
myTree.insert2(15);
myTree.insert2(13);
myTree.insert2(5);
myTree.insert2(66);
myTree.insert2(50);
myTree.insert2(100);
myTree.traverse();
//console.log(myTree.lookup(66));
console.log(myTree.min());
console.log('');
myTree.delete(15);
myTree.traverse();


