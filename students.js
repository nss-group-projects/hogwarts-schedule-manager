const { getStudents, getHouses } = require("/database");
const { sortingHat } = require("./sortingHat.js");

const houses = getHouses();

const enrollStudents = (number) => {
  const students = getStudents(num);
  const sortedStudents = sortingHat(students);
  return sortedStudents;
};

module.exports = { enrollStudents };
