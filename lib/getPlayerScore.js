const getSum = require("./getSum");
const players = require("../data/players");

const getPlayerScore = ({ macro, pool, micro, division }) => {
  const weights = {
    macro: 1,
    pool: 4,
    micro: 6,
    division: 3,
  };

  const sumOfWeights = getSum(Object.values(weights));

  return (
    (macro * weights["macro"] +
      pool * weights["pool"] +
      micro * weights["micro"] +
      division * weights["division"]) /
    sumOfWeights
  );
};

console.log(
  getPlayerScore({
    macro: 8,
    pool: 6,
    micro: 9,
    division: 7,
  })
);

module.exports = getPlayerScore;
