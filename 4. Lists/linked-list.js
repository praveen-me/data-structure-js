class LinkListNode{
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }

    toString() {
        return `${this.value}`
    }
}

class LinkedList{
    constructor() {
        this.head = null;
        this.tail = null
    }


    // Add to the start of the list
    prepand(value) {
        const currentNode = new LinkListNode(value, this.head); 
        this.head = currentNode;

        if(!this.tail) {
            this.tail = currentNode
        }

        return this;
    }

    // Add to the end of the list
    append(value) {
        const currentNode = new LinkListNode(value)

        if(!this.head) {
            this.head = currentNode;
            this.tail = currentNode;

            return this;
        }

        this.tail.next = currentNode
        this.tail = currentNode;

        return this;
    }


    // Find the node and return it
    search(value = undefined) {
        if(!this.head) {
            return null;
        }

        let currentNode = this.head;

        while(currentNode) {
            if(value !== undefined && currentNode.value === value) {
                return currentNode;
            }

            currentNode = currentNode.next;
        }
        return null
    }
 
    toArray() {
        const nodes = []

        let currentNode = this.head;

        while(currentNode) {
            nodes.push(currentNode)
            currentNode = currentNode.next;
        }

        return nodes;
    }

    toString() {
        return this.toArray().map(node => node.toString())
    }
}

const newLinkedList = new LinkedList();
newLinkedList.append(10)
newLinkedList.prepand(30)
newLinkedList.append(20)

console.log(newLinkedList.toString())

console.log(newLinkedList.search(30))