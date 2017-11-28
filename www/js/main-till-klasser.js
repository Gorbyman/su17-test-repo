let a = new Student('John', 'Irving', '910313-1329');
a.beginCourse('programmering');
a.beginCourse('engelska');

console.log(a);
console.log(a.sayHi());

let b = new Teacher('Thomas', 'Andersson', '731014-5497');
b.startTeachingCourse('webbutveckling');
b.startTeachingCourse('agila metoder');

console.log(b);
console.log(b.sayHi() + 'and I\'m a teacher in ' + b.teachingCourses[0]);



let c = JSON.parse(JSON.stringify(a,'','  '));
console.log(c);


// Object.assing
let x = {};
let y = {name:'Thomas', age:40};
let z = {favColor:'blue'};
// x är målet, y är källan, z är källan
Object.assign(x,y,z);


