class Node {
    constructor(value) {
        this.value = value,
        this.next = null,
        this.previous = null
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.length = 1;
        this.tail = this.head;
    }

    append(value) {
        let newNode = new Node(value);
        if(this.length > 0) {
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    print() {
        let currentNode = this.head;
        let array = [];
        while(currentNode != null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(array);
    }

    prepend(value) {
        let newNode = new Node(value);
        if(this.length > 0) {
            newNode.next = this.head;
            this.head.previous = newNode;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    remove(index) {
        if(this.length > 1) {
            if(index <= 0) {
                this.head.next.previous = null;
                this.head = this.head.next;
            } else if(index >= this.length - 1) {
                this.tail.previous.next = null;
                this.tail = this.tail.previous;
            } else {
                let i = 0;
                let currentNode = this.head;
                while(i < index) {
                    currentNode = currentNode.next;
                    i++;
                }
                currentNode.previous.next = currentNode.next;
                currentNode.next.previous = currentNode.previous;
            }
            this.length--;
        } else {
            this.head = null;
            this.tail = null;
            this.length = 0;
        }
    }

    insert(index, value) {
        if(index <= 0) {
            return this.prepend(value);
        } else if(index >= this.length) {
            return this.append(value);
        } else {
            let i = 0;
            let currentNode = this.head;
            while(i < index) {
                currentNode = currentNode.next;
                i++;
            }
            let newNode = new Node(value);
            currentNode.previous.next = newNode;
            newNode.next = currentNode;
            newNode.previous = currentNode.previous;
            currentNode.previous = newNode;
            this.length++;
        }
    }

    reverse() {
        if(this.length > 1) {
            let i = 0;
            let j = this.length - 1;
            let frontNode = this.head;
            let rearNode = this.tail;
            let swap;
            while(i < j) {
                swap = frontNode.value;
                frontNode.value = rearNode.value;
                rearNode.value = swap;
                i++;
                j--;
                frontNode = frontNode.next;
                rearNode = rearNode.previous;
            }
        }
    }
}

const list = new DoublyLinkedList(10);
list.print();
list.remove(1);
list.print();
list.prepend(11)
list.append(66);
list.append(33);
list.print();
list.insert(4, 100);
list.print();
list.reverse();
list.print();
list.reverse();
list.print();