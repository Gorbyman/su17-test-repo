class Base {
  constructor(settings){
  	let defaults = this.defaults();
  	// Rensa settings från oönskade egenskaper
  	this.cleanSettings(defaults, settings);
  	// Lägg in defaults och settings i this
    Object.assign(this, defaults, settings);
  }

  defaults() {
  	return {};
  }

  cleanSettings(defaults, settings){
  	let defaultKeys = Object.keys(defaults);
  	for(let key in settings){
  		if(!defaultKeys.includes(key)){
  			delete settings[key];
  		}
  	}
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