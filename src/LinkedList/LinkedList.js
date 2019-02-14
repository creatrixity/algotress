/**
 * Representation of a linked list.
 * 
 * @type {Array<LinkedListNode>}
 */
class LinkedList {
  constructor () {
    this.count = 0;
    this.head = null;
    this.tail = null;
  }
  
  /**
   * Adds a node to the head of the list.
   * 
   * @param {Object<linkedListNode>} linkedListNode
   * @returns {Void}
   */
  addFirst(linkedListNode){
    // Cache the prior head of the list.
    const initialHead = this.head;
    
    // Set the head of the list to the new node whilst
    // setting the tail of the list to the initial head node.
    this.head = linkedListNode;
    this.head.setNext(initialHead);
    
    // Know we just let a new node in.
    this.count = this.count + 1;
    
    // If we only have one node, it is automatically both the head
    // and the tail.
    if (this.count === 1) {
      this.tail = this.head;
    }
  }
  
  /**
   * Adds a node to the end of the linked list.
   * 
   * @param {Object<LinkedListNode>} linkedListNode
   * @returns {Void}
   */
  addLast (linkedListNode){
    // If the node to be added links to another node, reset it to link to null.
    if (linkedListNode.next) {
      linkedListNode.setNext(null);
    }
    // If we have no nodes on the list, the tail node is also the head node.
    // If not, we chain this node to the current tail. 
    if (this.count === 0) {
      this.head = linkedListNode;
    } else {
      this.tail.next = linkedListNode;      
    }
    
    // We make this node the new tail node, we then increment the count.
    this.tail = linkedListNode;
    this.count = this.count + 1;
  }
  
  /**
   * Adds a linked list node before a node that contains a certain value.
   * 
   * @param {Object<LinkedListNode>} linkedListNode
   * @param {Object<LinkedListNode>} nodeToBeAttached
   * 
   * @returns {Void}
   */
  addBefore (linkedListNode, nodeToBeAttached){
    // Start the search at the head node.
    let currentNode = this.head;
    let previousNode = null;
    let hasFoundNode = 0;
        
    while (currentNode) {
      if (currentNode.getValue() === linkedListNode.getValue()) {
        // We have found our attachment node.
        hasFoundNode = 1;
        
        // We are at the tail; Attach the incoming node before the tail.
        // Otherwise we attach within the list.
        if (!currentNode.getNext()) {
          // If we have a previous node, then we have more than a single node in the list.
          // Otherwise, we update the new head as the incoming node.
          if (previousNode) {
            nodeToBeAttached.setNext(currentNode);
            previousNode.setNext(nodeToBeAttached);            
          } else {
            nodeToBeAttached.setNext(currentNode);
            this.head = nodeToBeAttached;
          }
        } else {
          // Add the node to the list.
          nodeToBeAttached.setNext(currentNode);
          previousNode.setNext(nodeToBeAttached);

        }
      }
      
      previousNode = currentNode;
      currentNode = currentNode.getNext();
    }
    
    if (!hasFoundNode) {
      throw new Error('Could not find a node with the value: ' + linkedListNode.getValue());
      return;
    }
    
    this.count = this.count + 1;
  }
  
  /**
   * Removes a node from the front of the linked list.
   *  
   * @returns {Void}
   */
  removeFirst (){
    // If we have no nodes, do nothing.
    if (!this.count) return;
    
    // Shift the head one place up the list and decrement the count.
    this.head = this.head.getNext();
    this.count = this.count - 1;

    // If we have no nodes, destroy tail pointer reference.
    if (!this.count) {
      this.tail = null;
    }
  }
  
  /**
   * Removes the tail node on the linked list.
   * 
   * @returns {Void}
   */
  removeLast (){
    // If we have an empty list, no need going further.
    if (!this.count) return;
    
    // If we have a single item on the list, set all pointers to null
    // and we are on our merry way. Genius!
    if (this.count === 1) {
      this.head = null;
      this.tail = null;
      
      return;
    }
    
    // Start checking from the head of the list.
    let currentNode = this.head;
    
    // As long as we are yet to reach the tail node of our list keep searching.
    while (currentNode.getNext() !== this.tail) {
      currentNode = currentNode.getNext();
    }
    
    // We've reached the node just before the tail. Destroy the reference to the tail.
    // Then set this node as the new tail.
    currentNode.setNext(null);
    this.tail = currentNode;
    
    // Decrement the count as we just removed a node.
    this.count = this.count - 1;
  }
  
  /**
   * Removes a node from any position within the node list
   * 
   * @param {Any} item - Value of the node to be removed.
   * @returns {Void}
   */
  remove (item){
    // Initialize the current node as the linked list head.
    // Also track the previous node in the iteration.
    let currentNode = this.head;
    let previousNode = null;
            
    // As long as we still have a node to process keep on.
    while (currentNode) {
      // If we've found the item to be removed.
      if (currentNode.getValue() === item) {
        // If previous is null, that means we either:
        //  (a) Have only a single node in the list or
        //  (b) We are at the first node in the list.
        if (previousNode !== null) {
          previousNode.setNext(currentNode.getNext());
                    
          if (currentNode.getNext() === null) {
            this.tail = previousNode;
          }
          
          this.count = this.count - 1;
        } else {
          // Remove the first node on the list.
          this.removeFirst();
        }
        
        return true;
      }

      // Keep the loop going.
      previousNode = currentNode;
      currentNode = currentNode.getNext();
    }
  }

  /**
   * Prints all the values in the linked list.
   * 
   * @returns {Void}
   */
  printAll (){
    // Set active node to the first node in the linked list nodes collection.
    let node = this.head;
    
    // As long as we have a valid node, print its value.
    while (node !== null) {
      console.log(node.value);
      node = node.getNext();
    }
  }
  
  /**
   * Checks if the list contains an item.
   * 
   * @param {Any} item
   * @returns {Boolean}
   */
  has (item){
    // Start checking from the head of the list.
    let currentNode = this.head;
    
    // As long as we are yet to find the value, keep searching.
    while (currentNode) {
      if (currentNode.getValue() === item) return true;
      
      currentNode = currentNode.getNext();
    }
    
    return false;
  }
  
  /**
   * Returns the number of nodes on the linked list.
   * 
   * @returns {Number}
   */
  getCount (){
    return this.count;
  }
  
  /**
   * Returns the node at the head of the list.
   * 
   * @returns {Object<LinkedListNode>}
   */
  getHead (){
    return this.head;
  }
  
  /**
   * Returns the node at the bottom of the list.
   * 
   * @returns {Object<LinkedListNode>}
   */
  getTail (){
    return this.tail;
  }
  
  /**
   * Resets all pointers to initial states.
   * 
   * @returns {Void}
   */
  clear (){
    this.head = null;
    this.tail = null;
    this.count = 0;
  }
}

export default LinkedList;