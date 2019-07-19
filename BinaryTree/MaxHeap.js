class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        if(this.heap.length > 1) {
            let childIndex = this.heap.length - 1;
            let parentIndex = Math.floor((childIndex - 1) / 2);
            while(parentIndex >= 0 && this.heap[childIndex] > this.heap[parentIndex]) {
                let temp = this.heap[parentIndex];
                this.heap[parentIndex] = this.heap[childIndex];
                this.heap[childIndex] = temp;
                childIndex = parentIndex;
                parentIndex = Math.floor((childIndex - 1) / 2);
            }
        }
    }

    remove() {
        if(this.heap.length > 1) {
            this._swap(0, this.heap.length -1);
            let removedElement = this.heap.pop();
            let parentIndex = 0;
            let leftChildIndex = 1;
            let rightChildIndex = 2;
            while(rightChildIndex <= this.heap.length - 1 && 
                (this.heap[parentIndex] < this.heap[leftChildIndex] ||
                     this.heap[parentIndex] < this.heap[rightChildIndex])) {
                        let maxChildIndex = this.heap[leftChildIndex] >= this.heap[rightChildIndex] ? 
                            leftChildIndex : rightChildIndex;
                        this._swap(parentIndex, maxChildIndex);
                        parentIndex = maxChildIndex;
                        leftChildIndex = 2 * parentIndex + 1;
                        rightChildIndex = 2 * parentIndex + 2;
                     }
            if(leftChildIndex === this.heap.length - 1 && 
                this.heap[parentIndex] < this.heap[leftChildIndex]) {
                    this._swap(parentIndex, leftChildIndex);
                }
        return removedElement;
        } else {
            return this.heap.pop();
        }
    }

    _swap(elem1, elem2) {
        let temp = this.heap[elem2];
        this.heap[elem2] = this.heap[elem1];
        this.heap[elem1] = temp;
    }

    max() {
        console.log(this.heap[0]);
    }

    show() {
        console.log(this.heap);
    }
}

const myHeap = new MaxHeap();
myHeap.insert(10);
myHeap.insert(20);
myHeap.insert(30);
myHeap.insert(40);
myHeap.insert(50);
myHeap.show();
myHeap.remove();
myHeap.show();
myHeap.remove();
myHeap.show();
myHeap.remove();
myHeap.show();
myHeap.remove();
myHeap.show();
myHeap.remove();
myHeap.show();