// a = [1, 2, 3] = 1
// b = [3, 2, 1] = 1

function compareTriplets(a, b) {
  const numberOfGames = 3;
  let tableOfPoints = [0, 0];
  const aliceIndex = 0,
    bobIndex = 1;

  // passo por cada jogo
  for (let gameNumber = 0; gameNumber < numberOfGames; gameNumber++) {
    // atribuo os pontos
    if (a[gameNumber] > b[gameNumber]) tableOfPoints[aliceIndex]++;
    else if (a[gameNumber] < b[gameNumber]) tableOfPoints[bobIndex]++;
  }

  return tableOfPoints;
}

arr.reduce((ac, av) => {});

console.log(compareTriplets([17, 28, 30], [99, 16, 8]));
