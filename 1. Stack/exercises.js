// 1. Implement Stack Data Structure using string data type
// Operations you need to add are
// isEmpty() - returns true if the storage is empty
// push(value) - add a new value and returns the size of the storage
// pop() - remove one element and returns the deleted element
// peek() - displays the last pushed element in the storage
// size() - the size of the storage

class Stack {
  constructor(storage) {
    this.storage = storage;
  }
  isEmpty() {
    if(this.storage.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  push(value) {
    this.storage += `*${value}`;
    return this.storage;
  }
  pop() {
    let index = this.storage.lastIndexOf('*');
    let deletedValue = this.storage.slice(index);
    this.storage = this.storage.substr(0, index);
    return deletedValue;
  }
  peek() {
    return this.storage.substr(this.storage.lastIndexOf('*'));  
  }
  size() {
    let starCount = 0;
    for(let i = 0; i <= this.storage.length; i++) {
      if(String(this.storage[i]).includes('*')) {
        starCount++;
      }
    }
    return starCount+1;
  }
}

var stack = new Stack('k');
console.log(stack.isEmpty())
console.log(stack.push('b'))
console.log(stack.push('hello'))
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.push('hello'))
console.log(stack.push('world'))
console.log(stack.peek())
console.log(stack.size())
console.log(stack)
console.log(stack.push('super'))
console.log(stack.push('mario'))
console.log(stack.pop())
console.log(stack.size())
console.log(stack.peek())
console.log(stack)


// 2. Implement every method given above using the 'object' data type.
// Additionals:
// Modify your stack to take max capacity as a parameter and once you exceed the size it should print message
// "Max capacity already reached"


// Make a method named 'contains' which will return true if any of the value matches the value of object.
// stack.contains('hello') - true or false

// Write a method named sort() which sorts by value


// Use This For Testing

// var myStack = new Stack(3);
// console.log(myStack.isEmpty()) // true
// console.log(myStack.push('a'), 'should be 1');
// console.log(myStack.push('b'), 'should be 2');
// console.log(myStack.push('c'), 'should be 3');
// console.log(myStack.push('d'), 'Max capacity already reached');
// console.log(myStack.pop(), 'should be c');
// console.log(myStack.size(), 'should be 2');
// console.log(myStack.peek(), 'should be b');
// console.log(myStack.size(), 'should be 2');