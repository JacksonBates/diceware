// generates passphrase from wordlist using yahtzee dice rolls

import wordlistKeyGen from "./wordlistKeyGen";
import wordlistLookup from "./wordlistLookup";


const passphraseGen = (length) => {
  let phrase = []
  for (let i = 0; i < length; i++) {
    let key = wordlistKeyGen();
    let word = wordlistLookup(key);
    phrase.push(word);
  }

  return phrase.join(' ');
}

export default passphraseGen;