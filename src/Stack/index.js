import { default as Stack } from './ArrayStack';
import PostfixCalculator from './PostfixCalculator'

function test (){
  const friends = new Stack();

  friends.push('Johnson');
  friends.push('Mr Aye Verb');

  friends.printAll();
}

function calculator (){
  const terms = "5 6 7 * + 1 -".split(' ');
  
  new PostfixCalculator(terms);
}

calculator();

export default Stack;