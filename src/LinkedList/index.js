import LinkedList from './LinkedList';
import LinkedListNode from './LinkedListNode';

function test() {
  const firstNode = new LinkedListNode(15);
  const secondNode = new LinkedListNode(20);
  const thirdNode = new LinkedListNode(40);
  const fourthNode = new LinkedListNode(30);
  const fifthNode = new LinkedListNode('Nemanja Matic');

  const teamList = new LinkedList();

  teamList.addFirst(firstNode);
  teamList.addFirst(secondNode);
  teamList.addFirst(thirdNode); 
//  teamList.addFirst(fifthNode);
//  40 --> 30 --> 20 ---> 15
  teamList.addBefore(firstNode, fourthNode);
  
//  teamList.printAll();
  
//  console.log(teamList.has('David de Gea') && `You ain't never lied, David de Gea still in this bitch.`);
}

export {
  LinkedList,
  LinkedListNode
};