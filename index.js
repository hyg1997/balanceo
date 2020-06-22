const players = require("./players");
const getSum = require("./lib/getSum");

const teamLength = 2;
const epsilon = 0.8;

const sumOfPlayers = getSum(players.map((player) => player.value));

const average = sumOfPlayers / players.length;

let results = [];
let selectedPlayers = [];

for (let i = 0; i < players.length; i++) {
  const playerA = players[i];

  for (let j = i + 1; j < players.length; j++) {
    const playerB = players[j];
    const sumatory = playerA.value + playerB.value;

    if (Math.abs(average - sumatory / teamLength) > epsilon) continue;

    selectedPlayers.push(playerA, playerB);
    results.push(
      `${playerA.name} - ${playerB.name} (${sumatory / teamLength})`
    );
  }
}

console.log(results);
