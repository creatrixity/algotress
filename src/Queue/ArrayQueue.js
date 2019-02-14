/**
 * Creates a blueprint for a Queue implemented with an Array.
 * 
 * @type {Queue<Array>}
 */
class ArrayQueue {
  constructor (){
    this._items = new Array(0);
    
    // Pointer to the start of the queue.
    this._head = 0;
    
    // Capacity of the queue at the moment.
    this._size = 0;
    
    // Pointer to the end of the queue.
    this._tail = -1;
  }
  
  /**
   * Adds an item to the queue. Also performs some memory management.
   * 
   * @param {Any} item
   * @returns {Void}
   */
  enqueue (item){
    // If we have reached the max capacity of the array, we need to grow the array.
    // This is done by allocating a new array and copying items from the old array.
    if (this._size === this.getCount()) {
      // We have to compute a size for the new array.
      // If our old array has a capacity of zero items we assign a default.
      // Otherwise, we double the capacity for the new array.
      const newLength = this._size === 0 ? 4 : this._size * 2;
      const newArray = new Array(newLength);
      
      // If we have any items in the array, we have to copy the items.
      // Otherwise, we continue with the default head and tail values.
      if (this._size > 0) {
        let targetIndex = 0;
        
        // If the tail pointer is lesser than the head pointer, then the tail wrapped across the array.
        // In that case, we copy differently as we have to copy **from the head of the array** to the **end of the array** 
        // and then **from the tail of the array** to the **head of the array**.
        // Otherwise, we copy regularly from the head of the array to the end of the array
        if (this._tail < this._head) {
          // Copying from the head of the array to the end.
          for (let i = this._head; i <= this.getCount(); i++) {
            newArray[targetIndex] = this._items[i];
            targetIndex = targetIndex + 1;
          }

          // Copying from the tail of the array to the head.
          for (let i = this._tail; i <= this._head; i++) {
            newArray[targetIndex] = this._items[i];
            targetIndex = targetIndex + 1;
          }
        } else {
          // Copying from the head of the array to the end.
          for (let i = this._head; i <= this.getCount(); i++) {
            newArray[targetIndex] = this._items[i];
            targetIndex = targetIndex + 1;            
          }
        }
        
      } else {
        this._head = 0;
        this._tail = -1;
      }
      
      // Make the items array our new array.
      this._items = newArray;
    }
    
    // If our tail pointer is at the end of the array, reset it to the beginning of the array.
    // Otherwise, increment the tail pointer as the item to be enqueued is the new tail.
    this._tail = this._tail === this.getCount() ? 0 : this._tail + 1;
    
    // Add the item to the backing array in the tail position and increment the array size.
    this._items[this._tail] = item;
    this._size = this._size + 1;
  }
  
  /**
   * Removes an item at the start of the queue and returns it.
   * 
   * @returns {Any}
   */
  dequeue (){
    if (!this.getCount()) throw new Error('The queue is empty');
    
    const value = this._items[this._head];    
    
    // If the head is at the end of the array, reset the head to the start of the array.
    // Also decrement the size of the array since we've rmoved an item.
    this.head = this._head === this._items.length - 1 ? 0 : this._head + 1;
    this._size = this._size - 1;
    
    return value;
  }
  
  /**
   * Returns an item at the start of the queue.
   * 
   * @returns {Any}
   */
  peek (){
    if (!this.getCount()) throw new Error('The queue is empty');
    
    return this._items[this._head];
  }  
  
  /**
   * Returns the total number of items in the queue.
   * 
   * @returns {Number}
   */
  getCount (){
    return this._items.length;
  }
  
  /**
   * Resets all pointers to initial states.
   * 
   * @returns {Void}
   */
  clear (){
    this._head = 0;
    this._tail = -1;
    this._size = 0;
  }
  
  /**
   * Prints all items in the queue.
   * 
   * @returns {Void}
   */
  printAll (){
    if (!this.getCount()) throw new Error('The queue is empty');
    
    if (this._tail < this._head) {
      for (let i = this._head; i <= this._items.length; i++) {
        console.log(this._items[i]);
      }
      
      for (let i = this._tail; i <= this._head; i++) {
        console.log(this._items[i]);
      }
    } else {
      for (let i = this._head; i <= this._tail; i++) {
        console.log(this._items[i]);
      }
    }
  }
}

export default ArrayQueue;