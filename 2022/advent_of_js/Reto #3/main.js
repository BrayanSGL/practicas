function distributeGifts(packOfGifts, reindeers) {
  const weightOfPack = packOfGifts
    .map((gift) => gift.length)
    .reduce((a, b) => a + b, 0);
  const weightForReindeers = reindeers
    .map((reindeer) => reindeer.length * 2)
    .reduce((a, b) => a + b, 0);

  return Math.trunc(weightForReindeers / weightOfPack);
}

// Mismas funcion pero reducida

function distributeGifts(packOfGifts, reindeers) {
  return Math.trunc(
    reindeers
      .map((reindeer) => reindeer.length * 2)
      .reduce((a, b) => a + b, 0) /
      packOfGifts.map((gift) => gift.length).reduce((a, b) => a + b, 0)
  );
}