import {
  LinkedList,
  LinkedListNode
} from '../../src/LinkedList';

/**
 * Creates a blueprint for a Queue implemented with  Linked List.
 * 
 * @type {Queue<LinkedList>}
 */
class LinkedListQueue {
  constructor (){
    // For the items in a linked list implemented queue, the last item added 
    // is the newest item while the first item added is the oldest item.
    this._items = new LinkedList();
  }
  
  /**
   * Adds an item to the queue.
   * 
   * @param {Any} item
   * @returns {Void}
   */
  enqueue (item){
    this._items.addLast(new LinkedListNode(item));
  }
  
  /**
   * Removes an item at the start of the queue and returns it.
   * 
   * @returns {Any}
   */
  dequeue (){
    if (this._items.getCount() === 0) throw new Error('The queue is empty.');
    
    const { value } = this._items.getHead();
    this._items.removeFirst();
    
    return value;
  }
  
  /**
   * Returns an item at the start of the queue.
   * 
   * @returns {Any}
   */
  peek (){
    if (this._items.getCount() === 0) throw new Error('The queue is empty.');
    
    return this._items.getHead().value;
  }
  
  /**
   * Returns the number of items in the list.
   * 
   * @returns {Number}
   */
  getCount (){
    return this._items.getCount();
  }
  
  /**
   * Prints all items in the queue.
   * 
   * @returns {Void}
   */
  printAll (){
    return this._items.printAll();
  } 
}

export default LinkedListQueue;