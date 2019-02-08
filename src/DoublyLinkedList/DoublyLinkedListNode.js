/**
 * Creates a doubly linked list node instance.
 * 
 * @type {any} value
 */
class DoublyLinkedListNode {
  constructor (value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }

  /**
   * Sets the previous chained node to this one.
   * 
   * @param {Object<DoublyLinkedListNode>} previous
   * 
   * @returns {Void}
   */
  setPrevious(previous) {
    this.previous = previous;
  }

  /**
   * Sets the next chained node to this one.
   * 
   * @param {Object<DoublyLinkedListNode>} next
   * 
   * @returns {Void}
   */
  setNext(next) {
    this.next = next;
  }

  /**
   * Returns the next chained node to this one.
   * 
   * @returns {Object<DoublyLinkedListNode>}
   */
  getNext() {
    return this.next;
  }
  
  /**
   * Returns the value of this node.
   * 
   * @returns {Any}
   */
  getValue() {
    return this.value;
  }    
}

export default DoublyLinkedListNode;