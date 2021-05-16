// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

class LinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
    }
    
    add(value) {
        const currentNode = new ListNode(value);
        
        if(!this.head) {
            this.head = currentNode;
            this.tail = currentNode;
            return this.head;
        }
        
        this.tail.next = currentNode
        this.tail = currentNode;
        return this;
    }
    
    getList() {
        return this.head;
    }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function reverseLinkedListNumber(list) {
    let currentList = list;
    let numbers = currentList.val
    let currentNode = currentList.next
    
    while(currentNode) {
        numbers = `${currentNode.val}${numbers}`;
        currentNode = currentNode.next
    }
    
    return BigInt(numbers)
}

var addTwoNumbers = function(l1, l2) {
    const number1 = reverseLinkedListNumber(l1)
    const number2 = reverseLinkedListNumber(l2)
    
    const sum = BigInt(number1 + number2).toString().split('').reverse()
    
    let listNode = new LinkedList();
    
    
    sum.forEach((value) => {
        listNode.add(value)
    })
    
    return listNode.getList();
};