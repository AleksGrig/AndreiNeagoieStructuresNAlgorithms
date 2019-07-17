class Stack {
    constructor() {
        this.array = [];
        this.length = 0;
    }

    peek() {
        return this.array[this.length - 1];
    }

    push(value) {
        this.array.push(value);
        this.length++;
    }

    pop() {
        return this.array[--this.length];
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