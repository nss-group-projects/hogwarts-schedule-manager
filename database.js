const database = {
  studentNames: [
    "Harry Potter",
    "Hermione Granger",
    "Ron Weasley",
    "Draco Malfoy",
    "Luna Lovegood",
    "Neville Longbottom",
    "Ginny Weasley",
    "Cedric Diggory",
    "Cho Chang",
    "Dean Thomas",
    "Seamus Finnigan",
    "Parvati Patil",
    "Lavender Brown",
    "Pansy Parkinson",
    "Blaise Zabini",
    "Michael Corner",
    "Terry Boot",
    "Anthony Goldstein",
    "Padma Patil",
    "Susan Bones",
    "Justin Finch-Fletchley",
    "Hannah Abbott",
    "Ernie Macmillan",
    "Zacharias Smith",
    "Angelina Johnson",
    "Katie Bell",
    "Alicia Spinnet",
    "George Weasley",
    "Fred Weasley",
    "Lee Jordan",
    "Daphne Greengrass",
    "Tracey Davis",
    "Millicent Bulstrode",
    "Marcus Flint",
    "Adrian Pucey",
    "Roger Davies",
    "Marietta Edgecombe",
    "Penelope Clearwater",
    "Oliver Wood",
    "Alicia Spinnet",
  ],
  professorNames: [
    { firstName: "Albus", lastName: "Dumbledore" },
    { firstName: "Minerva", lastName: "McGonagall" },
    { firstName: "Severus", lastName: "Snape" },
    { firstName: "Remus", lastName: "Lupin" },
    { firstName: "Pomona", lastName: "Sprout" },
    { firstName: "Filius", lastName: "Flitwick" },
    { firstName: "Horace", lastName: "Slughorn" },
    { firstName: "Sybill", lastName: "Trelawney" },
    { firstName: "Rubeus", lastName: "Hagrid" },
    { firstName: "Gilderoy", lastName: "Lockhart" },
  ],
  houses: ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"],
  subjects: [
    "Potions",
    "Transfiguration",
    "Defense Against the Dark Arts",
    "Herbology",
    "Charms",
    "Astronomy",
    "History of Magic",
    "Flying",
  ],
};

const getSubjects = () => database.subjects;

const getStudents = (number) => {
  return database.studentNames.slice(0, number).map((name) => ({ name }));
};
const getProfessors = (number) => {
  return database.professorNames.slice(0, number);
};

const getHouses = () => database.houses;

module.exports = { getStudents, getProfessors, getHouses, getSubjects };
