// 1. Implement Queue Data Structure using String
// Operations you need to add are
// isEmpty() - returns true if the storage is empty
// enqueue(value) - add a new value and returns the size of the storage
// dequeue() - remove one element and returns the deleted element
// peek() - displays the latest element in the storage
// size() - the size of the storage

class Queue {
  constructor(storage) {
    this.storage = storage;
  }
  isEmpty() {
    if (this.storage.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  enqueue(value) {
    let addValue = `${value}*`;
    let newStr = `${addValue}${this.storage}`;
    this.storage = newStr;
    return this.storage;
  }
  dequeue() {
    let index = this.storage.lastIndexOf('*');
    let deletedValue = this.storage.substr(index);
    this.storage = this.storage.substr(0, index);
    return deletedValue;
  }
  peek() {
    return this.storage.substr(0, this.storage.indexOf('*'));
  }
  size() {
    let starCount = 0;
    for (let i = 0; i <= this.storage.length; i++) {
      if (String(this.storage[i]).includes('*')) {
        starCount++;
      }
    }
    return starCount + 1;
  }
}

let strQueue = new Queue('');
console.log(strQueue.isEmpty());
console.log(strQueue.enqueue("world"));
console.log(strQueue.enqueue("super"));
console.log(strQueue.dequeue());
console.log(strQueue.enqueue("hello"));
console.log(strQueue.dequeue());
console.log(strQueue)
console.log(strQueue.size());
console.log(strQueue.peek());
// Implement all above methods using Object data type
// Additionals:
// Modify your queue to take max capacity as a parameter and once you exceed the size it should print message
// "Max capacity already reached"


// Make a method named 'contains' which will return true if any of the value matches the value of object.
// queue.contains('hello') - true or false

// Write a method named sort() which sorts by value

class ObjQueue {
  constructor(capacity) {
    this.capacity = capacity;
    this.storage = {};
    this.i = Object.keys(this.storage).length;
  }

  isEmpty() {
    if (this.i - 1 === 0) {
      return true;
    } else {
      return false;
    }
  }

  enqueue(value) {
    if (this.capacity < this.i + 1) {
      return "Max Capacity Reached";
    }
    let lastIndex = Object.keys(this.storage).length;

    this.storage[this.i] = value;
    this.i++;
    return this;
  }

  dequeue() {
    let keys = Object.keys(this.storage);
    let firstKey = keys[0];
    delete this.storage[firstKey];
    this.i = keys.length - 1;
    return this;
  }

  peek() {
    return this.storage[this.i - 1];
  }

  contains(value) {
    if(Object.values(this.storage).includes(value)) {
      return true;
    }
    return false;
  }
}

let objQueue = new ObjQueue(3);
console.log(objQueue.isEmpty());
console.log(objQueue.enqueue('k'));
console.log(objQueue.enqueue('j'));
console.log(objQueue.enqueue('l'));
console.log(objQueue.enqueue('p'));
console.log(objQueue.dequeue());
console.log(objQueue.dequeue());
console.log(objQueue.enqueue('p'));
console.log(objQueue.enqueue('j'));
console.log(objQueue.enqueue('f'));
console.log(objQueue.peek());
console.log(objQueue.contains('p'))


// New Implementation
// Principle - FIFO(First In First Out)

function createQueue() {
  const queue = [];

  return {
    // enqueue
    enqueue(item) {
      queue.unshift(item);
    },

    // dequeue
    dequeue() {
      queue.pop();
    },

    // peek
    peek() {
      return queue[queue.length - 1]
    },

    // length
    get length() {
      return queue.length;
    },

    // isEmpty
    isEmpty() {
      return queue.length === 0;
    }
  }
}

const queue = createQueue();

queue.enqueue('Queue');
queue.enqueue('Data');
queue.enqueue('Structure');

console.log(queue.isEmpty());

console.log(queue.length);

console.log(queue.peek());