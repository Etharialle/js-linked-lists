class LinkedList {
    constructor (head = null) {
        this.head = head;
    }
    append(node) {
        if (this.head === null) {
            this.head = node;
            return;
        }
        let lastNode = this.head;
        while (lastNode.nextNode != null) {
            lastNode = lastNode.nextNode;
        }
        lastNode.nextNode = node;
        return
    }
    getSize() {
        let size = 0;
        if (this.head === null) {
            return size;
        }
        let lastNode = this.head;
        size++;
        while (lastNode.nextNode != null) {
            size++;
            lastNode = lastNode.nextNode;
        }
        return size;
    }
    getHead() {
        if (this.head === null) {
            return "Empty List";
        }
        return this.head;
    }
    getTail() {
        if (this.head === null) {
            return "Empty List";
        }
        let lastNode = this.head;
        while (lastNode.nextNode != null) {
            lastNode = lastNode.nextNode;
        }
        return lastNode;
    }
    at(index) { // zero indexed
        if(this.getSize() < index) {
            return "Out of Range";
        }
        let lastNode = this.head;
        for (let i = 0; i < index; i++) {
            lastNode = lastNode.nextNode;

        }
        return lastNode;
    }
}

class Node {
    constructor (value = null, nextNode = null){
        this.value = value;
        this.nextNode = nextNode;
    }
}

let firstNode = new Node(3);
let secondNode = new Node(5);
let firstList = new LinkedList();
console.log(firstList.getSize());
firstList.append(firstNode);
firstList.append(secondNode);
console.log(firstNode);
console.log(firstList);
console.log(firstList.getSize());
console.log(firstList.getHead());
console.log(firstList.getTail());
console.log(firstList.at(0));
