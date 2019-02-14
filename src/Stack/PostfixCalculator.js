import Stack from './ArrayStack';

class PostfixCalculator {
  constructor (terms){
    this._runCalculation(terms);
  }
  
  _runCalculation (terms){
    const values = new Stack();
    let lhs, rhs;

    for (let i = 0; i <= terms.length - 1; i++) {
      if (!isNaN(parseInt(terms[i], 10))) {
        values.push(parseInt(terms[i], 10));
      } else {
        rhs = values.pop();
        lhs = values.pop();

        switch (terms[i]) {
          case '-':
            values.push(lhs - rhs);
            break;

          case '+':
            values.push(lhs + rhs);
            break;

          case '*':
            values.push(lhs * rhs);
            break;

          case '/':
            values.push(lhs / rhs);
            break;

          case '%':
            values.push(lhs % rhs);
            break;

          default:
            throw new Error(`Unrecognized postfix notation token ${terms[i]}`);
        }
      }
    }
    
    values.printAll();
  }
}

export default PostfixCalculator;