  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];

const oldEnough = people.filter(people => people.age >= 21);
// console.log(oldEnough);

const paul = people.filter(p => p.name === 'Paul')[0];
// console.log(paul);

// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];

// find whoever has at least 5 years of experience with at least 1 coding language
const has5YrsExp = skill => skill.yrsExperience >= 5;
const hasStrongSkills = student => student.skills.filter(has5YrsExp).length > 0;

// use our previous function(s) to pick out candidates
const candidates = students.filter(hasStrongSkills);

//... and log them
//console.log(candidates);

// my attempt to code
let candidateList = candidates.map(student => student.name);
console.log(candidateList);