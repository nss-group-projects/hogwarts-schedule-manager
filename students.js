const { getStudents, getHouses } = require("./database.js");
const { sortingHat } = require("./sortingHat.js");

const houses = getHouses();

const enrollStudents = (number) => {
  const students = getStudents(number);
  const sortedStudents = sortingHat(students);
  return sortedStudents;
};

module.exports = { enrollStudents };
