/*
QUEUE
Abstract data type
FIFO - First in, first out
Collection of elements with enqueue and dequeue operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.
DO NOT use an array and the native push/shift method in your implementation. Use an object as the underlying data structure.

1. Implement Queue Data Structure using String
  Operations you need to add are
    * enqueue(value) - add a new value and returns the size of the storage
    * isEmpty() - returns true if the storage is empty
    * dequeue() - remove one element and returns the deleted element
    * peek() - displays the latest element in the storage
    * size() - the size of the storage
*/

// String implementation
class Queue {
  constructor(limit) {
    this.limit = limit;
    this._storage = ""; // String Implementation
  }
  isEmpty() {
    if(this._storage.length == 0)return 'Queue is empty';
    else return 'Queue is not empty';
  }
  enqueue(value) {
    if(this._storage.split("*").length - 1>=this.limit)return 'Queue is full';
    this._storage+=("*"+value);
  }
  dequeue() {
    let newStr = this._storage.slice(1);
    this._storage = newStr.slice(newStr.indexOf("*"));
  }
  peek() {
    return this._storage.slice(1).split("*")[0];
  }
  size() {
    return this._storage.slice(1).split("*").length;
  }
}

// Object Implementation
class Queue {
  constructor(limit) {
    this.limit = limit;
    this._storage = {}; // Object Implementation
  }
  isEmpty() {
    let key = Object.keys(this._storage);
    if(key.length==0)return 'Queue is empty';
    else return 'Queue is not empty';
  }
  enqueue(value) {
    let key = Object.keys(this._storage);
    if(key.length==this.limit)return 'Queue is full';
    let lastKey;
    (key.length) ? lastKey = Number(key[key.length-1])+1 : lastKey = 0;
    this._storage[lastKey]=value;
  }
  dequeue() {
    let value = Object.values(this._storage);
    let newObj = {};
    for(let i=1; i<value.length; i++){
      newObj[i-1]=value[i];
    }
    this._storage = newObj;
  }
  peek() {
    let key = Object.keys(this._storage);
    return this._storage[key[0]];
  }
  size() {
    let key = Object.keys(this._storage);
    return key.length;
  }
}

/*
Implement all above methods using Object data type
  Additionals:
    1. Modify your queue to take max capacity as a parameter and once you exceed the size it should
    print message "Max capacity already reached"
    2. Make a method named 'contains' which will return true if any of the value matches the value of object.
    queue.contains('hello') - true or false
    3. Write a method named sort() which sorts by value
*/

// Use for testing
// var myQueue = new Queue(3);
// console.log(myQueue.enqueue('a'), 'should be 1');
// console.log(myQueue.enqueue('b'), 'should be 2');
// console.log(myQueue.enqueue('c'), 'should be 3');
// console.log(myQueue.enqueue('d'), 'should be Max capacity reached');
// console.log(myQueue.dequeue(), 'should be a');
// console.log(myQueue.count(), 'should be 2');
// console.log(myQueue.peek(), 'should be b');
// console.log(myQueue.count(), 'should be 2');
// console.log(myQueue.contains('b'), 'should be true');
// console.log(myQueue.contains('d'), 'should be false');
// console.log(myQueue._storage, myQueue._head);
// console.log(myQueue.until('b'), 'should be 1');
// console.log(myQueue.until('c'), 'should be 2');
// console.log(myQueue.until('d'), 'should be null');
