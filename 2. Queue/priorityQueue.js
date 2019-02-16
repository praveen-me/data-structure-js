// Priority Queue same as queue data structure but add element based on their priority based
// Methods:
// 1- Enqueue, 2- Dequeue, 3 - Front, 4- Size, 5 - isEmpty


class PriorityQueue {
  constructor(){
    this.collection = [];
  }

  /**
   * takes an array and set in the collection on the basis of priority
   * array's first element is the element to be inserted and the second
   * is priority
  */
  enqueue(elementArr) {
    if (this.isEmpty()) {
      this.collection.push(elementArr);
    } else {
      let added = false;
      for(const elem in this.collection) {
        if(elementArr[1] < this.collection[elem][1] ) {
          this.collection.splice(elem, 0, elementArr);
          added = true;
          break;
        }
      }
      if (!added) {
        this.collection.push(elementArr)
      }
    }
  }

  // removes the first element
  dequeue() {
    const value = this.collection.shift(); 
    return value[0];
  }

  // print the queue
  printCollection(){
    console.log(this.collection);
  }

  // returns the size of the queue
  size(){
    return this.collection.length;
  }

  // returns first element of queue
  front() {
    return this.collection[0][0];
  }
  
  // tells that queue is empty or not
  isEmpty() {
    return this.collection.length === 0;
  }
}

const queueA = new PriorityQueue();

queueA.enqueue(['apple', 1]);

queueA.enqueue(['orange', 3]);

queueA.enqueue(['grapes', 2]);

queueA.enqueue(['dates', 2]);

console.log(queueA.dequeue())

queueA.printCollection();