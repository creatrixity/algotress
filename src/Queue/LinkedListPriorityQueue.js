import {
  DoublyLinkedList,
  DoublyLinkedListNode
} from '../../src/DoublyLinkedList';

/**
 * Orders items with value size as priority.
 * 
 * @type PriorityQueue<Object>
 */
class LinkedListPriorityQueue {
  constructor (){
    this._items = new DoublyLinkedList();
  }
  
  /**
   * Adds an item to the queue with respect to priority.
   * 
   * @param {Any} item
   * @returns {Void}
   */
  enqueue (item){
    let newQueueItem = new DoublyLinkedListNode(item);
    
    // If there are no items in the queue, add this item to the queue.
    // Otherwise, find a node with greater priority than this one and add this item before it.
    if (!this._items.getCount()) {
      this._items.addLast(newQueueItem);
    } else {
      // Start the search from the head item.
      let current = this._items.getHead();
            
      // As long as we are yet to find a node with greater priority, keep searching.
      while (current && current.getValue() >= item) {
        current = current.getNext();
      }
      
      // If we don't find a node with greater priority, slot this into the last spot.
      // However, if we do find such a node, slot this item before it in the queue. 
      if (current === null) {
        this._items.addLast(newQueueItem);
      } else {
        this._items.addBefore(current, newQueueItem);
      }
    }
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

export default LinkedListPriorityQueue;