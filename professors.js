const { getProfessors } = require("./database.js");

function hireProfessors(studentCount) {
  const professors = getProfessors(Math.ceil(studentCount / 10));
  return professors;
}

module.exports = { hireProfessors };
