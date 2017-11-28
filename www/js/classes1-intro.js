// Deklarera en klass/class
class Person {
  constructor(firstName,lastName){
    // this syftar på det objektet vi håller på att skapa
    this.firstName = firstName;
    this.lastName = lastName;
  }
  sayHi(){
    return `Hej din get! Mitt namn är ${this.firstName}!`;
  }
  sayHiToAnotherPerson(personToGreet){
    return `Hej ${personToGreet.firstName}! Jag heter ${this.firstName}!`;
  }
}

// Skapa objekt av klassen Person
// Objekt skapade från klasser kallas instanser av klassen
let a = new Person('Anna', 'Andersson');
let b = new Person('Pelle', 'Persson');

// Kan se klassnamnet även om det är en tom klass
console.log(a);
console.log(b);

console.log(a.sayHi());
console.log(b.sayHi());

console.log(a.sayHiToAnotherPerson(b));
console.log(b.sayHiToAnotherPerson(a));