import LinkedList from './LinkedList';
import LinkedListNode from './LinkedListNode';

function test() {
  const firstNode = new LinkedListNode('David de Gea');
  const secondNode = new LinkedListNode('Victor Nilsson Lindelof');
  const thirdNode = new LinkedListNode('Luke Shaw');
  const fourthNode = new LinkedListNode('Phil Jones');
  const fifthNode = new LinkedListNode('Nemanja Matic');

  const teamList = new LinkedList();

  teamList.addFirst(firstNode);
  teamList.addFirst(secondNode);
  teamList.addFirst(thirdNode); 
  teamList.addFirst(fifthNode);
  
  teamList.addBefore(fifthNode, fourthNode);
  
  teamList.printAll();
  
  console.log(teamList.has('David de Gea') && `You ain't never lied, David de Gea still in this bitch.`);
}

export {
  LinkedList,
  LinkedListNode
};