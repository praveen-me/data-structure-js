function sockMerchant(n, ar) {
  let matchedPairs = 0;
  const reduced = ar.reduce((acc, s) => {
    if(!acc[s]) {
      acc[s] = 1;
      return acc;
    } else {
      acc[s] += 1;
      return acc
    }
  }, {});

  for(const key in reduced) {
    if(reduced[key] >= 2) {
      matchedPairs += Math.floor(reduced[key] / 2);
    }
  }

  return matchedPairs;
}

sockMerchant(9,
  [10, 20, 20, 10, 10, 30, 50, 10, 20])