import {
  DoublyLinkedList,
  DoublyLinkedListNode
} from '../DoublyLinkedList';

/**
 * Creates a conceptual representation of a Stack ADT.
 * 
 * @type {Stack<DoublyLinkedList>}
 */
class LinkedListStack {
  constructor (){
    this._list = new DoublyLinkedList();
  }
  
  /**
   * Adds a value to the stack.
   * 
   * @param {Any} value
   * @returns {Void}
   */
  push(value){
    this._list.addFirst(new DoublyLinkedListNode(value));
  }
  
  /**
   * Removes and returns the item at the top of the list.
   * 
   * @returns {Any}
   */
  pop (){
    // If we don't have any items in the list, throw an exception.
    if (!this._list.getCount()) throw Error('The stack is empty.');
    
    // Get the item at the top of the list.
    const item = this._list.getHead();
    
    this._list.removeFirst();
    
    return item;
  }
  
  /**
   * Prints all values on the list.
   * 
   * @returns {Void}
   */
  printAll (){
    this._list.printAll();
  }
}

export default LinkedListStack;