// returns word from wordlist based on key

import wordlist from './wordlist';

const wordlistLookup = (key) => {
  return wordlist[key]
}

export default wordlistLookup;