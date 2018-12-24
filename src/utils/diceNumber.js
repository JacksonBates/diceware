// Generate a random integer r with equal chance in  min <= r < max.
// source: https://stackoverflow.com/questions/41437492/how-to-use-window-crypto-getrandomvalues-to-get-random-values-in-a-specific-rang

const diceNumber = (min, max) => {
  const range = (max + 1) - min; // max + 1 includes upper value, i.e. can roll a 6
  const requestBytes = Math.ceil(Math.log2(range) / 8);
  if (!requestBytes) { // No randomness required
      return min;
  }
  const maxNum = Math.pow(256, requestBytes);
  let ar = new Uint8Array(requestBytes);

  while (true) {
      window.crypto.getRandomValues(ar);

      let val = 0;
      for (let i = 0;i < requestBytes;i++) {
          val = (val << 8) + ar[i];
      }

      if (val < maxNum - maxNum % range) {
          return min + (val % range);
      }
  }
}

export default diceNumber;