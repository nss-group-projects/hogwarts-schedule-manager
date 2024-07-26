const { getSubjects } = require("./database.js");

const subjects = getSubjects();

const createClassRosters = (students) => {
  const rosters = {};

  subjects.forEach((subject) => {
    rosters[subject] = [];
  });

  students.forEach((student) => {
    student.schedule.forEach((subject) => {
      rosters[subject].push(student.name);
    });
  });

  return rosters;
};

module.exports = { createClassRosters };
