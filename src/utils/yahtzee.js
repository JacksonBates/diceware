// Rolls dice 5 times

import diceNumber from './diceNumber';

const yahtzee = () => {
  let arr = [];
  let roll;
  for (let i = 0; i < 5; i++) {
    roll = diceNumber(1, 6);
    arr.push(roll)
  }

  return arr;
}

export default yahtzee;