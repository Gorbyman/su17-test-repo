class Person extends Base{

  defaults(){
  	return {
  		firstName: 'John',
  		lastName: 'Doe',
  		pNo: undefined,
  		favColor: undefined
  	};
  }

  sayHi(){
    return `Hi! I am ${this.firstName} ${this.lastName}!`;
  }	
}




/*
class Person {
  constructor(firstName, lastName, pNo){
    this.firstName = firstName;
    this.lastName = lastName;
    this.pNo = pNo;
  }
  sayHi(){
    return `Hi! I am ${this.firstName} ${this.lastName}!`;
  }	
}
*/