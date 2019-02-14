/**
 * Array implementation of a stack class.
 * 
 * @type type
 */
class ArrayStack {
  constructor (){
    this._size = 0;
    this._items = new Array(0);
  }
  
  /**
   * Adds an item to the stack.
   * 
   * @param {Any} item
   * @returns {Void}
   */
  push (item){
    // Allocate variables for memory management.
    let newLength, newArray;
    
    // If we have filled our array, we double the length.
    if (this._size === this._items.length) {
      newLength = this._size === 0 ? 4 : this._size * 2;
      
      // Allocate a new array since the old one is filled up.
      newArray = new Array(newLength);
      newArray = newArray.concat(this._items);
      
      // Assign this._items to the new array.
      this._items = newArray;
    }
    
    // Add the item to the array and increment the size of the stack.
    this._items[this._size] = item;
    this._size++;
  }
  
  /**
   * Returns the most recent item pushed into the stack and removes it.
   * 
   * @returns {Any}
   */
  pop (){
    // Throw an error if we try to perform an illegal operation.
    if (this._size === 0) throw new Error('The stack is empty');
    
    // Decrement the size of the stack.
    this._size = this._size - 1;
    
    return this._items[this._size];
  }
  
  /**
   * Returns the most recent item pushed into the stack.
   * 
   * @returns {Any}
   */
  peek (){
    // Throw an error if we try to perform an illegal operation.
    if (this._size === 0) throw new Error('The stack is empty');
        
    return this._items[this._size - 1];
  }
  
  /**
   * Returns the number of items on the stack.
   * 
   * @returns {Number}
   */
  getCount (){
    return this._size;
  }
  
  /**
   * Prints all items on the stack.
   * 
   * @returns {Void}
   */
  printAll (){
    for (let i = this._size - 1; i >= 0; i--) {
      console.log(this._items[i])
    }
  }
}

export default ArrayStack;