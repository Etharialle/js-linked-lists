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
    prepend(node) {
        if (this.head === null) {
            this.head = node;
            return;
        }
        node.nextNode = this.head
        this.head = node;
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
    pop() {
        if (this.head === null) {
            return "Empty List - nothing to pop";
        }
        let size = this.getSize();
        let lastNode = this.head;
        for (let i = 0; i < size - 2; i++) {
            lastNode = lastNode.nextNode;
        }
        lastNode.nextNode = null;
        return lastNode;
    }
    contains(value) {
        if (this.head === null) {
            return "Empty List - nothing to find";
        }
        let lastNode = this.head;
        while (lastNode.nextNode != null) {
            if (lastNode.value === value) {
                return true;
            }
            lastNode = lastNode.nextNode;
            
        }
        if (lastNode.value === value) {
            return true;
        }
        return false;
    }
    find(value) {
        if (this.head === null) {
            return "Empty List - nothing to find";
        }
        let lastNode = this.head;
        let size = this.getSize();
        for (let i = 0; i < size; i++) {
            if (lastNode.value === value) {
                return i;
            }
            lastNode = lastNode.nextNode;
        }
        return "Not in list";
    }
    toString() {
        if (this.head === null) {
            return "Empty List - nothing to stringify";
        }
        let lastNode = this.head;
        let size = this.getSize();
        let listString = '';
        for (let i = 0; i < size; i++) {
            listString += `( ${lastNode.value} ) - > `;
            lastNode = lastNode.nextNode;
        }
        listString += "null";
        return listString;
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
let thirdNode = new Node(22);
let fourthNode = new Node(66);
let firstList = new LinkedList();
//console.log(firstList.getSize());
//console.log(firstList.find(3));
//console.log(firstList.toString());
firstList.append(firstNode);
firstList.append(secondNode);
firstList.append(thirdNode);
//console.log(firstNode);
console.log(firstList);
console.log(firstList.getSize());
firstList.prepend(fourthNode);
//console.log(firstList.getSize());
//console.log(firstList.getHead());
//console.log(firstList.getTail());
//console.log(firstList.at(0));
//console.log(firstList.pop());
//console.log(firstList.contains(22));
//console.log(firstList.find(22));
//console.log(firstList.toString());
console.log(firstList.getSize());
console.log(firstList);
// End of File
