import Queue from './ArrayQueue';
import PriorityQueue from './LinkedListPriorityQueue';

function testLinkedListQueue (){
  const costlyPlayers = new Queue();
  
  costlyPlayers.enqueue('Neymar da Silva Jnr');
  costlyPlayers.enqueue('Kylian Mbappe');
  costlyPlayers.enqueue('Phillipe Coutinho');
  costlyPlayers.enqueue('Ousmane Dembele');
  costlyPlayers.enqueue('Cristiano Ronaldo Aveiro dos Santos');
  costlyPlayers.enqueue('Paul Pogba');
  
  console.log('There are', costlyPlayers.getCount(), 'costly players.');
  console.log('These players are: \n');
  costlyPlayers.printAll();
  console.log('The most expensive player here is', costlyPlayers.peek());  
}

function testLinkedListPriorityQueue (){
  const sizes = new PriorityQueue();
  
  sizes.enqueue(20);
  sizes.enqueue(40);
  sizes.enqueue(15);
  sizes.enqueue(30);
//  sizes.enqueue(10.5);
  
  sizes.printAll();
}

function testArrayQueue (){
  const bestPlayers = new Queue();
  
  bestPlayers.enqueue('Luka Modric');
  bestPlayers.enqueue('Cristiano Ronaldo Aveiro dos Santos');
  bestPlayers.enqueue('Lionel Andres Cuccitini Messi');
  bestPlayers.enqueue('Ricardo "Kaka" Izecson Santos Leite');
  bestPlayers.enqueue('Fabio Cannavaro');
  bestPlayers.enqueue('Ronaldo de Assis Moeira "Ronaldinho"');
  bestPlayers.enqueue('Luis Figo');
  bestPlayers.enqueue('Ronaldo Nazario de Lima');
  bestPlayers.enqueue('Zinedine Zidane');
  
  bestPlayers.printAll();
}

testLinkedListPriorityQueue();

export default Queue;