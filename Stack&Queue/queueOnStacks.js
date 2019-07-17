class Queue {
    constructor() {
        this.array = [];        
    }

    peek() {
        console.log(this.array[0]);
    }

    enqueue(value) {
        this.array.push(value);
    }

    dequeue() {
        let helpArray = [];
        while(this.array.length > 0) {
            helpArray.push(this.array.pop());
        }
        let value = helpArray.pop();
        while(helpArray.length > 0) {
            this.array.push(helpArray.pop());
        }
        return value;
    }
}

const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());

