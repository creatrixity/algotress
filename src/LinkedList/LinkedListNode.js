/**
 * Creates a linked list node instance.
 * 
 * @type {any} value
 */
class LinkedListNode {
  constructor (value) {
    this.value = value;
    this.next = null;
  }

  /**
   * Sets the next chained node to this one.
   * 
   * @param {Object<LinkedListNode>} next
   * 
   * @returns {Void}
   */
  setNext(next) {
    this.next = next;
  }
  
  /**
   * Returns the next chained node to this one.
   * 
   * @returns {Object<LinkedListNode>}
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

export default LinkedListNode;