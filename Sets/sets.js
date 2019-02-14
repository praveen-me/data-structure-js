// Sets (Identical elements)
// Methods of sets
// 1 - has, 2 - values, 3 - add, 4 - remove, 5 - size, 6- union, 7 - intersection, 8 - difference, 9 - subset

class MySet {
  constructor() {
    this.collection = []
  }

  // takes and element checks weather it has that element or not
  has(element) {
    return this.collection.indexOf(element) !== -1; 
  }

  //values return all the values of the set
  values() {
    return this.collection;
  }

  //add the values to the set. If value added return true else false
  add(element) {
    if(!this.has(element)) {
      this.collection.push(element);
      return true;
    }
    return false;
  }

  // removes a particular element from the set if it's available
  remove(element) {
    if(this.has(element)) {
      const elmIndex = this.collection.indexOf(element);
      this.collection.splice(elmIndex, 1);
      return true;     
    }
    return false;
  }

  // sizes gives the length of the set
  size() {
    return this.collection.length;
  }

  // union combines two sets
  union(otherSet) {
    const unionSet = new MySet();
    const firstSetValues = this.values();
    const secondSetValues = otherSet.values();

    firstSetValues.forEach(v => unionSet.add(v));
    secondSetValues.forEach(v => unionSet.add(v));

    return unionSet.collection;
  } 

  // intersection of two sets
  intersection(otherSet) {
    const intersectionSet = new MySet();
    const firstSetValues = this.values();

    firstSetValues.forEach(v => {
      if(otherSet.has(v)) {
        intersectionSet.add(v)
      }
    })
    return intersectionSet.collection
  }

  // difference gave set includes difference of two sets
  difference(otherSet) {
    const differenceSet = new MySet();
    const firstSetValues = this.values();

    firstSetValues.forEach(v => {
      if(!otherSet.has(v)) {
        differenceSet.add(v)
      }
    })

    return differenceSet.collection;
  }
  
  // checks that passed set is the subset of the main set
  subset(otherSet) {
    const firstSetValues = this.values();
    return firstSetValues.every(v => otherSet.has(v))
  }
}

const setA = new MySet();
const setB = new MySet();

console.log(setB.add(10));
console.log(setB.add(5));
console.log(setB.add(9));
console.log(setB.add(8));
console.log(setA.add(6));
console.log(setA.has(3));
console.log(setA.add(5));

console.log(setA.values());
console.log(setB.values());

console.log(setA.union(setB))

console.log(setA.intersection(setB))

console.log(setA.subset(setB))