const { getHouses } = require("./database.js");

const houses = getHouses();
const sortedStudents = [];

const getAvailableHouses = (houseCounts) => {
  const availableHouses = [];
  for (let i = 0; i < houses.length; i++) {
    if (houseCounts[houses[i]] < 10) {
      availableHouses.push(houses[i]);
    }
  }
  return availableHouses;
};

const assignHouseToStudent = (houseCounts) => {
  const availableHouses = getAvailableHouses(houseCounts);
  const randomIndex = Math.floor(Math.random() * availableHouses.length);
  return availableHouses[randomIndex];
};

const sortingHat = (students) => {
  const houseCounts = {
    Gryffindor: 0,
    Hufflepuff: 0,
    Ravenclaw: 0,
    Slytherin: 0,
  };

  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const house = assignHouseToStudent(houseCounts);
    houseCounts[house] += 1;
    sortedStudents.push({
      name: student.name,
      house: house,
    });
  }
  return sortedStudents;
};

const getSortedHouses = () => {
  const sortedHouses = [];
  for (const house of houses) {
    const houseObj = { name: house, students: [] };
    for (const student of sortedStudents) {
      if (student.house == house) {
        houseObj.students.push(student);
      }
    }
    sortedHouses.push(houseObj);
  }
  return sortedHouses;
};

module.exports = { sortingHat, getSortedHouses };
