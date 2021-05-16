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

    delete(value) {
        if(!this.head) return null;

        let deletedNode = null;

        // If head is the value
        if(this.head && value !== undefined && this.head.value === value) {
            deletedNode = this.head;
            this.head = this.head.next;

            return deletedNode;
        }
    
        let currentNode = this.head;

        // If value is not head then traverse throught the list
        if(currentNode !== null) {
            while(currentNode.next) {
                if(currentNode.next.value === value) {
                    deletedNode = currentNode.next
                    currentNode.next = currentNode.next.next
                    return deletedNode;
                }
                currentNode = currentNode.next
    
            }
        }

        // Check if item is tail 
        if(this.tail && value !== undefined && this.tail.value === value) {
            deletedNode = this.tail;
            this.tail = currentNode;
            return deletedNode;
        }
    
        return null
    }

    deleteTail() {
        const deletedNode = this.tail;

        // If there's only one element
        if(this.head === this.tail) {
            this.head = null;
            this.tail = null;

            return deletedNode
        }

        // If there's multiple nodes in the linked list
        // Go through the end of the list and delete node from there
        let currentNode = this.head;

        while(currentNode.next) {
            if(!currentNode.next.next) {
                currentNode.next = null;
            } else {
                currentNode = currentNode.next
            }
        }

        this.tail = currentNode;

        return deletedNode;
    }

    deleteHead() {
        const deletedNode = this.head;

        // If list is empty
        if(!this.head) return deletedNode;

        // If multiple nodes are in the list
        if(this.head.next) { 
            this.head = this.head.next
        } else { // If there's only single node in the list
            this.head = null
            this.tail = null
        }

        return deletedNode
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

    // reverse the whole linked list
    reverse() {
        let currentNode = this.head;
        let prevNode = null;
        let nextNode = null;

        while(currentNode) {
            nextNode = currentNode.next;
            currentNode.next = prevNode;

            prevNode = currentNode;
            currentNode = nextNode;
        }

        this.tail = this.head;
        this.head = prevNode;

        return this;
    }
}

const newLinkedList = new LinkedList();
newLinkedList.append(10)
newLinkedList.prepand(30)
newLinkedList.prepand(40)
newLinkedList.append(20)


console.log(newLinkedList.toString())
// console.log(newLinkedList.delete(10), "delete")
// newLinkedList.deleteTail()
// newLinkedList.deleteHead()
newLinkedList.reverse()
console.log(newLinkedList.toString())

// console.log(newLinkedList.search(30), "search") 