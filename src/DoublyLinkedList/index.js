import DoublyLinkedList from './DoublyLinkedList';
import DoublyLinkedListNode from './DoublyLinkedListNode';

function test (){
  const firstNode = new DoublyLinkedListNode('Lady Ada Lovelace');
  const secondNode = new DoublyLinkedListNode('Donald Knuth');
  const thirdNode = new DoublyLinkedListNode('John Von Neumann');
  const fourthNode = new DoublyLinkedListNode('Alan Turing');

  const teamList = new DoublyLinkedList();

  teamList.addFirst(firstNode);
  teamList.addFirst(secondNode);
  teamList.addFirst(thirdNode); 

  teamList.addBefore(thirdNode, fourthNode); 
  
  teamList.printAll();
}

export {
  DoublyLinkedList,
  DoublyLinkedListNode
}