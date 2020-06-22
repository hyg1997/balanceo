const divisionPercentages = require("../data/divisonPercentages.json");
const getSum = require("./getSum");

const getIndex = (division) =>
  Object.keys(divisionPercentages).reduce(
    (accumulator, divisionName, index) =>
      accumulator || (divisionName === division ? index : 0),
    0
  );

const divisionAccumulatedPercentage = (division) => {
  const divisionIndex = getIndex(division);

  return Object.values(divisionPercentages).reduce(
    (accumulator, divisionPercentage, index) =>
      accumulator + (index <= divisionIndex ? divisionPercentage : 0),
    0
  );
};

const getDivisionScore = (division) =>
  (1 /
    Math.pow(
      divisionAccumulatedPercentage("Diamond I") - divisionAccumulatedPercentage(division),
      0.3
    )) *
  10;

const division = "Iron I";

console.log(division, getDivisionScore(division));

const division1 = "Silver IV";

console.log(division1, getDivisionScore(division1));

const division2 = "Gold IV";

console.log(division2, getDivisionScore(division2));

const division3 = "Platinum I";

console.log(division3, getDivisionScore(division3));

module.exports = getDivisionScore;
