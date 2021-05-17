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

// Solution with recusion
var addTwoNumbers = function(l1, l2) {
    let node = null;
    const carry = arguments[2];

    if(l1 || l2) {
        const val1 = l1? l1.val: 0;
        const val2 = l2? l2.val: 0;
        const next1 = l1 ? l1.next: null;
        const next2 = l2 ? l2.next : null;

        const sum = carry ? val1 + val2 + 1 : val1 + val2;
        node = new ListNode(sum % 10);
        node.next = addTwoNumbers(next1, next2, sum > 9);
    } else if(carry) {
        node = new ListNode(1);
    }

    return node
}

// Solution with while loop;
var addTwoNumbers = function(l1, l2) {
    let sum = 0;
    let currentNode = new ListNode(0);
    let result = currentNode

    while(l1 || l2) {
        
        if(l1) {
            sum += l1.val
            l1 = l1.next
        }
        
        if(l2) {
            sum += l2.val
            l2 = l2.next
        }

        currentNode.next = new ListNode(sum % 10)
        currentNode = currentNode.next

        sum = sum > 9 ? 1: 0
    }

    if(sum) {
        currentNode.next = new ListNode(sum)
    }

    return result.next
}