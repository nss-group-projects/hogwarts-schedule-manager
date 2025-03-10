const { getSubjects } = require("./database");

const subjects = getSubjects();

const createClassRoosters = (students) => {
  const rosters = {};

  subjects.forEach((subject) => {
    rosters.subject = [];
  });

  students.forEach((student) => {
    student.schedule.forEach((subject) => {
      rosters[subject].push(student.name);
    });
  });

  return roster;
};

module.exports = { createClassRosters };
