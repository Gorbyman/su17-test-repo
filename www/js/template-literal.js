// Classic strings
let x = 'This is a string';
let y = 'This is another string!';


// Template literal, använd tecknen ``
let greeting = 'Hello!';
let bye = 'See ya\' soon!';

function even(n) {
  return n % 2 == 0;
}

let z = `
  ${greeting}
  Let's write something cool here!
  We can write several lines in a template literal!
  ${bye}

  P.S. I forgot to tell you that 2 + 2 is ${2 + 2}
       Is that number even? ${even(2 + 2)} that!
`;

console.log(x);
console.log(y);
console.log(z);