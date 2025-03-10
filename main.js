const { enrollStudents } = require("./Students.js");
const { hireProfessors } = require("./professors.js");
const { generateSchedule } = require("./schedule.js");
const { getSortedHouses } = require("./sortingHat.js");
const { createClassRosters } = require("./classRosters.js");
const { getSubjects } = require("./database.js");

const studentsToEnroll = 40;
const professors = hireProfessors(studentsToEnroll);
const students = enrollStudents(studentsToEnroll);
const sortedHouses = getSortedHouses();
const classSchedule = getSubjects();

// Assign houses and generate student schedules
const studentsWithSchedules = generateSchedule(students);

const classRosters = createClassRosters(studentsWithSchedules);

console.log(`
*******************************************************************************************
**  H O G W A R T S   S C H O O L   O F   W I T C H C R A F T   A N D   W I Z A R D R Y  **
*******************************************************************************************

            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡀⠠⠤⠀⠐⠒⠂⢀⢈⣉⡉⠉⣉⠉⠉⣉⡉⠉⠀⠐⠒⠂⠀⠤⠄⢀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠤⠐⠂⠈⣡⡤⠤⣤⡀⢠⣾⠛⠉⠙⠀⢹⡇⢠⣿⡄⢀⣽⠃⣸⠟⢿⡀⠀⢹⣿⠛⣶⡄⢈⣁⣐⠂⠤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⡀⠄⢂⣡⠄⠐⣿⠀⢸⣿⠀⠀⢹⣷⠘⣿⡀⠈⣻⠇⠀⣿⡟⠀⢻⣾⠃⣰⡿⠷⠿⣧⠀⢸⡿⢾⡟⠁⠉⢹⣿⠛⠇⣤⠬⣔⡠⢀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠌⠀⠀⠈⢻⣦⡶⠻⣧⠘⢿⣦⣀⣼⠟⠀⠙⠻⠶⠛⠀⠀⠉⠀⠀⠀⠃⠘⠛⠃⠀⠀⠛⠃⠾⡇⠈⢿⡄⠀⣸⡇⠀⡀⢿⣦⡘⠃⠀⠡⠀⠀⠀⠀
        ⠀⠀⠀⠀⡨⠂⠀⠀⠀⢿⣆⠀⠿⠓⠀⠉⢉⣁⠀⠤⠄⠀⠒⠒⠀⠀⠈⠉⠉⠉⠉⠁⠀⠀⠒⠒⠀⠠⠤⠀⣀⡀⠻⠈⠉⠃⠚⢷⣤⣿⠇⠀⠐⢅⠀⠀⠀⠀
        ⠀⠀⠔⠁⠀⠀⠑⢄⠀⢉⡀⠤⠐⠂⠈⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠁⠐⠂⠤⢀⡀⠀⡠⠊⠀⠀⠀⠢⠀⠀
        ⢀⠊⣀⣀⣀⠀⠀⠀⠙⠒⠒⢒⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⡒⠒⠐⠋⠀⠀⠀⣀⣀⣀⠑⡀
        ⠉⠀⠀⠀⢰⠀⠀⠀⣀⠄⠂⠁⠀⠀⡠⠊⠑⠒⠢⢤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡤⠔⠒⠂⠑⢄⠀⠀⠈⠐⠠⣀⠀⠀⠀⡆⠀⠀⠀⠉
        ⠀⠀⠀⠀⠀⢀⠄⠊⠀⠀⠀⠀⣠⠎⠀⠀⠀⠀⠀⠀⠈⠑⠦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠴⠊⠁⠀⠀⠀⠀⠀⠀⠱⣄⠀⠀⠀⠀⠑⠠⡀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠐⠁⠀⠀⠀⠀⢀⠞⠁⠀⠀⢀⣶⣶⣦⠀⠀⠀⠀⠈⠑⠂⠀⠠⡀⢀⠄⠀⠐⠊⠁⣠⣴⣶⣶⣄⠀⠀⠀⠀⠀⠈⠣⡀⠀⠀⠀⠀⠈⠂⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠧⢄⡀⠀⠀⠘⣿⡇⣸⠀⣠⣶⣿⣿⣦⡀⠀⠀⠙⠃⠀⢀⣴⣿⣿⠛⠉⠉⣿⣿⡆⠀⠀⠀⠀⢀⡠⠼⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠲⣄⠀⠙⢷⡿⠀⣿⣿⣿⣿⣿⣿⠂⠀⠀⠀⢀⠞⠛⠉⠁⠀⢀⣴⣿⡿⠁⠀⠀⣠⠖⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢆⠀⣸⠇⠠⣿⣿⣿⣿⡏⠁⣠⣤⣤⠀⡎⠀⢀⣤⣶⣾⣿⠿⠋⠀⠀⠀⡰⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⣿⠀⢰⣿⣿⣿⣿⣿⠿⠟⠀⠀⠈⠀⢠⣿⡿⠋⠉⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠘⣷⣿⣿⣿⣿⡿⠛⠳⠦⢤⣀⣀⡀⠿⠟⠓⢄⠀⠀⣠⣶⣿⣿⣷⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠀⠀⢹⣿⣿⣯⠘⡄⠲⣶⣶⠖⠀⠠⣶⣦⡶⠂⢠⣿⣿⣿⣿⣿⣿⠟⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠇⠀⣶⠿⠛⣿⡇⠀⢃⠀⢸⣿⡀⠀⠀⢸⣿⡇⠀⡜⠙⢿⣿⣿⣿⣿⠀⠸⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡾⠤⠤⠿⠷⠤⠼⠷⠤⢼⠀⢸⣿⠟⠛⠛⢻⣿⠁⠀⡧⠤⠤⠤⠿⠯⠤⠤⠤⢷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠞⠀⠀⣠⣤⣤⣀⣀⠀⠀⡘⠀⠈⣿⠀⠀⠀⢸⣿⠀⠀⢳⠶⣾⣿⣷⡄⠀⢠⣾⣿⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⢊⠀⠀⢿⣿⣿⣿⣿⣿⠟⠡⡁⠀⠒⠛⠒⠀⠀⠾⠛⠒⠀⢈⣄⣽⣿⣿⣧⣀⣸⣿⣿⣿⣷⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠋⠀⠸⣷⡀⢸⣿⣿⣿⣧⣀⠀⠀⠑⠄⠤⠄⠐⠒⠒⠂⢠⣤⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠙⠦⡀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⣔⠁⠀⠀⠀⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⡀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠈⣢⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠈⠢⡀⠀⠀⠀⠀⠉⣹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⢀⠔⠁⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢄⠀⠀⢀⣾⡿⠋⠀⠀⢹⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⢹⣿⣿⣿⣿⣿⣿⣿⣿⠇⠈⠉⠻⢿⣿⡇⡠⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⡄⠈⠁⢀⡀⠿⠷⠿⠿⠛⣿⣿⠿⣿⡄⠀⠀⠀⠀⢸⣿⣿⣿⠹⣿⠟⠛⣇⠀⢀⡀⠀⠀⢩⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢦⡴⠋⠙⠦⡀⠀⣴⡾⠿⠟⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⠁⠀⣿⣀⠀⣿⠿⠋⠙⢦⡔⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠈⠑⠢⠤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⠀⠀⣀⠿⠟⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠉⠢⣄⠀⠀⠀⠀⠀⠀ ⣠⠔⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠈⢣⡀⠀⠀ ⢀⡜⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  ⠱⠤⠤⠎⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀

Welcome to Hogwarts School of Witchcraft and Wizardry!
`);

console.log(
  `You will be overseeing ${professors.length} professors as they instruct ${studentsToEnroll} new students in the art of magic.`
);
console.log(`\nThe new students enrolled are as follows:`);
students.forEach((student) => {
  console.log(`\t* ${student.name}`);
});

console.log(`\nHouses are sorted as follows:`);
for (const house of sortedHouses) {
  console.log(`  ${house.name}:`);
  for (const student of house.students) {
    console.log(`\t${student.name}`);
  }
}

console.log("\nHere are the professors who will be instructing the students:");
for (const teacher of professors) {
  console.log(`\t* ${teacher.firstName} ${teacher.lastName}`);
}

console.log("\n\nClasses will be held in the following magical subjects:");
for (const cls of classSchedule) {
  console.log(`\t* ${cls}`);
}

console.log("\nHere are the student schedules:");
studentsWithSchedules.forEach((student) => {
  console.log(`\n\t${student.name}'s schedule: ${student.schedule.join(", ")}`);
});

console.log("\nHere are the class rosters:");
for (const subject in classRosters) {
  console.log(`\n~~~ ${subject} ~~~`);
  for (const student of classRosters[subject]) {
    console.log(`\t  ${student}`);
  }
}

module.exports = { studentsToEnroll };
