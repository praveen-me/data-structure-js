/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    let currentNode = head;
    let lengthPointer = 0;

    while(currentNode) {
        lengthPointer += 1;
        currentNode = currentNode.next
    }

    let nthNodePointer = (lengthPointer - n);

    
    currentNode = head;
    let result = currentNode;
    
    if(nthNodePointer === 0) {
        currentNode = currentNode.next;
        return currentNode;
    } else {
        while(currentNode && nthNodePointer !== 0) {
            if(nthNodePointer === 1) {
                currentNode.next = currentNode.next.next;
            } else {
                currentNode = currentNode.next    
            }
            nthNodePointer -= 1
        }    
    }

    return result;
};