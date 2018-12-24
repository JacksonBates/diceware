// derives a random number between 11111 and 66666 using dice

import yahtzee from './yahtzee';

const wordlistKeyGen = () => {
  return parseInt(yahtzee().join(''));
}

export default wordlistKeyGen;
