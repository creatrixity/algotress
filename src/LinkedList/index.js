import LinkedList from './LinkedList';
import LinkedListNode from './LinkedListNode';

const firstNode = new LinkedListNode('David de Gea');
const secondNode = new LinkedListNode('Victor Nilsson Lindelof');
const thirdNode = new LinkedListNode('Luke Shaw');
const fourthNode = new LinkedListNode('Phil Jones');

const teamList = new LinkedList();

teamList.addFirst(firstNode);
teamList.addFirst(secondNode);
teamList.addFirst(thirdNode); 

teamList.remove('Victor Nilsson Lindelof');
teamList.addFirst(fourthNode); 

teamList.printAll();

console.log(teamList.has('David de Gea') && `You ain't never lied, David de Gea still in this bitch.`);