const { getProfessors } = require("./database.js");

function hireProfessors(studentCount) {
  const professors = getProfessors(Math.ceiling(studentCount / 10));
}
