class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top.value;
        
    }

    push(value) {
        const newNode = new Node(value);
        if(this.isEmpty()) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
    }

    pop() {
        if(!this.isEmpty()) {
            let value = this.top.value;
            if(this.length === 1) {
                this.bottom = null;                
            } 
                this.top = this.top.next;
            this.length--;
            return value;
        }
        return undefined;
    }

    isEmpty() {
        if(this.length === 0) {
            return true;
        }
    }
}

const myStack = new Stack();
myStack.push('Discord');
myStack.push('Udemy');
myStack.push('Google');
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
