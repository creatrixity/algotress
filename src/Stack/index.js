import { default as Stack } from './ArrayStack';

function test (){
  const friends = new Stack();

  friends.push('Johnson');
  friends.push('Mr Aye Verb');

  friends.printAll();
}

test();

export default Stack;