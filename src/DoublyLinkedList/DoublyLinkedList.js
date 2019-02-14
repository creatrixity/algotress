/**
 * Representation of a doubly linked list.
 */
class DoublyLinkedList {
  constructor () {
    this.count = 0;
    this.head = null;
    this.tail = null;
  }
  
  /**
   * Adds a node to the head of the list.
   * 
   * @param {Object<DoublyLinkedListNode>} doublyLinkedListNode
   * @returns {Void}
   */
  addFirst(doublyLinkedListNode){
    // Cache the prior head of the list.
    const initialHead = this.head;
    
    // Set the head of the list to the new node whilst
    // setting the tail of the list to the initial head node.
    this.head = doublyLinkedListNode;
    this.head.setNext(initialHead);
    
    // If we only have one node, it is automatically both the head and the tail.
    // If not, we chain the new head to point to the old head in its previous pointer.
    if (this.count === 0) {
      this.tail = this.head;
    } else {
      initialHead.setPrevious(this.head);
    }

    // Know we just let a new node in.
    this.count = this.count + 1;    
  }
  
  /**
   * Adds a node to the end of the linked list.
   * 
   * @param {Object<DoublyLinkedListNode>} doublyLinkedListNode
   * @returns {Void}
   */
  addLast (doublyLinkedListNode){
    // If the node to be added links to another node, reset it to link to null.
    if (doublyLinkedListNode.next) {
      doublyLinkedListNode.setNext(null);
    }
    // If we have no nodes on the list, the tail node is also the head node.
    // If not, we chain this node to the current tail. 
    // We also keep a link to the old tail *from* the new tail.
    if (this.count === 0) {
      this.head = doublyLinkedListNode;
    } else {
      this.tail.next = doublyLinkedListNode;
      doublyLinkedListNode.setPrevious(this.tail);
    }
    
    // We make this node the new tail node, we then increment the count.
    this.tail = doublyLinkedListNode;
    this.count = this.count + 1;
  }
  
  /**
   * Adds a doubly linked list node before a node that contains a certain value.
   * 
   * @param {Object<DoublyLinkedListNode>} doublyLinkedListNode
   * @param {Object<DoublyLinkedListNode>} nodeToBeAttached
   * 
   * @returns {Void}
   */
  addBefore (doublyLinkedListNode, nodeToBeAttached){

    if (this.getCount() <= 1) {
      this.addFirst(nodeToBeAttached);
    } else {
      // Start the search at the head node.
      let currentNode = this.head;

      // Tracks our search status.
      let hasFoundNode = 0;

      // We keep searching if this variable is not null.
      while (currentNode) {
        
        // We have found our site of attachment.
        if (currentNode.getValue() === doublyLinkedListNode.getValue()) {
          // Mark our search as successful.
          hasFoundNode = 1;
          
          // Update the next and previous links within our incoming node.
          nodeToBeAttached.setNext(currentNode);
          nodeToBeAttached.setPrevious(currentNode.getPrevious());
          
          // If we have a previous node, we are not at the head.
          // Otherwise, we are at the head of the linked list and we make it the new head.
          if (currentNode.getPrevious()) {
           // Update relevant nodes pointera to our incoming node.
            currentNode.getPrevious().setNext(nodeToBeAttached);
            currentNode.setPrevious(nodeToBeAttached);
          } else {
            this.addFirst(nodeToBeAttached);
          }
        }

        // Keep the iteration going.
        previousNode = currentNode;
        currentNode = currentNode.getNext();
      }
      
      // Throw an exception if we fail to find the node of interest.
      if (!hasFoundNode) {
        throw new Error('Could not find a node with the value: ' + doublyLinkedListNode.getValue());
        return;
      }

      this.count = this.count + 1;
    }
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
    // Otherwise, set the previous pointer of the new head to null.
    if (!this.count) {
      this.tail = null;
    } else {
      this.head.setPrevious(null);
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
    
    // The new tail of the list is the set to the previous
    // and now the previous points to null.
    this.tail.getPrevious().setNext(null);
    this.tail = this.tail.getPrevious();
        
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
          
          // If the current node has no next pointer object, we are at the tail and we set the tail to the previous node.
          // Otherwise, we set the current nodes next pointer to point to the node before this one.
          if (currentNode.getNext() === null) {
            this.tail = previousNode;
          } else {
            currentNode.getNext().setPrevious(previousNode);
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
      console.log(node.getValue());
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

export default DoublyLinkedList;