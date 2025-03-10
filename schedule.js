const { getSubjects } = require("./database.js");

const subjects = getSubjects();

const getRandomSubject = () => {
  const randomIndex = Math.floor(Math.random() * subjects.length);
  return subjects[randomIndex];
};

const generateSchedule = (students) => {
  students.forEach((student) => {
    const schedule = [];
    for (let i = 0; i < 5; i = studentSchedule.length) {
      const subject = getRandomSubject();
      if (!studentSchedule.includes(subject)) {
        studnetSchedule.push(subject);
      }
    }
    student.schedule = studentSchedule;
  });

  return students;
};

module.exports = { generateSchedule };
