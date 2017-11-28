/*
let a = new Teacher ({
  firstName: 'Thomas',
  lastName: 'Frank',
  pNo: '751231-4990',
  iAmAnAnimal: true,
  iAmCrazy: true
});

a.startTeachingCourse('programming');
a.startTeachingCourse('agila metoder');

console.log(a);
*/

$.getJSON('/JSON/students.json', classifyStudents);

// loopa genom array med info från JSON och skapa nya Student med klasskonstruktorn
function classifyStudents(data){
  let students = [];
  for(let obj of data){
    students.push(new Student(obj));
  }
  main(students);
}

function main(students){
  students[0].beginCourse('programming');
  students[1].beginCourse('construction');
  students[1].beginCourse('english');
  console.log(students[0].sayHi());
  console.log(students);
}