class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        this._insert(this, value);
    }

    _insert(node, value) {
        if(node === null) {
            return new Node(value);
        } else if(value <= node.value) {
            node.left = this._insert(node.left, value);
        } else if(value > node.value) {
            node.right = this._insert(node.right, value);
        }
        return node;
    }

    delete(value) {
        if(this.value === value && this.left === null && this.right === null) {
            console.log('Can\'t delete root without at least one child');
            return undefined;
        }else if(this.value === value && this.left === null) {
            let rightNode = this.right;
            this.value = rightNode.value;
            this.right = rightNode.right;
            this.left = rightNode.left;
        } else if(this.value === value && this.right === null) {
            let leftNode = this.left;
            this.value = leftNode.value;
            this.left = leftNode.left;
            this.right = leftNode.right;
        } else {      
            this._delete(this, value); 
        }       
    }

    _delete(node, value) {
        if(node === null) {
            return null;
        } else if(value < node.value) {
            node.left = this._delete(node.left, value);
        } else if(value > node.value) {
            node.right = this._delete(node.right, value);
        } else {
            if(node.left === null && node.right === null) {
                return null;
            } else if(node.left === null) {
                return node.right;
            } else if(node.right === null) {
                return node.left;
            } else {
                let minRight = this._min(node.right);
                node.value = minRight.value;
                node.right = this._delete(node.right, minRight.value);
            }
        }
        return node;
    }

    min() {
        let node = this._min(this);
        if(node) {
            console.log('min element is ' + node.value);
        } else {
            console.log('min element is undefined');
        }
    }

    _min(node) {
        if(node === null || node.left === null) {
            return node;
        } else {
            return this._min(node.left);
        }
    }

    maxDepth() {
        console.log('maximum depth is ' + this._maxDepth(this, 0, 0));
    }

    _maxDepth(node, left, right) {
        let depthLeft = left;
        let depthRight = right;
        if(node !== null) {
            if(node.left !== null) {
                depthLeft = this._maxDepth(node.left, ++depthLeft, depthRight);
            } 
            if(node.right !== null) {
                depthRight = this._maxDepth(node.right, depthLeft, ++depthRight);
            }
        }
        return depthLeft > depthRight ? depthLeft : depthRight;
    }

    print() {
        this._print(this);
    }

    _print(node) {
        if(node) {
            this._print(node.left);
            console.log(node.value);
            this._print(node.right);
        }
    }
}

const myNode = new Node(5);
myNode.insert(1);
myNode.insert(2);
myNode.insert(3);
myNode.insert(10);
myNode.insert(20);
myNode.insert(15);
myNode.maxDepth();
myNode.print();
myNode.min();
myNode.delete(5);
myNode.print();
myNode.min();
