import Queue from './LinkedListQueue';

function test (){
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

export default Queue;