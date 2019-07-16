// 1 --> 10 --> 5 --> 16

class Node {
    constructor(value) {
        this.value = value,
        this.next = null
    }
}

class LinkedList{
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        this.tail.next = new Node(value);
        this.tail = this.tail.next;
        this.length++;
    }

    appendB(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    print(){
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(array);
    }

    insert(index, value) {
        if(index > this.length || index < 0) {
            return undefined;
        } else if(index === 0) {
            this.prepend(value);
        } else if(index === this.length) {
            this.append(value);
        } else {
            let currentNode = this.head;
            let i = 0;
            while(i < index - 1) {
                currentNode = currentNode.next;
                i++;
            }
            const newNode = new Node(value);
            newNode.next = currentNode.next;
            currentNode.next = newNode;
            this.length++;
        }
    }

    remove(index) {
        if(index <= 0) {
            this.head = this.head.next;
        } else {
            let currentNode = this.head;
            let i = 0;
            while(i < index - 1 && currentNode.next.next != null) {
                currentNode = currentNode.next;
                i++;
            }
            currentNode.next = currentNode.next.next;
            if(index >= this.length - 1) {
                this.tail = currentNode;
            }
        }
        this.length--;
    }

    reverse() {
        if(this.length > 1) {
            let array = [];
            let currentNode = this.head;
            while(currentNode != null) {
                array.push(currentNode.value);
                currentNode = currentNode.next;
            }
            let j = array.length - 2;
            let newHead = this.tail;
            while(j >= 0) {
                let newNode = new Node(array[j--]);
                newHead.next = newNode;
                newHead = newHead.next;                
            }
            let swap = this.head;
            this.head = this.tail;
            this.tail = swap;
        }
    }
}

const linkedList = new LinkedList(10);
linkedList.print();
linkedList.append(5);
linkedList.appendB(16);
linkedList.prepend(1);
linkedList.insert(0, 66);
linkedList.print();
linkedList.remove(4);
linkedList.print();
linkedList.reverse();
linkedList.print();


