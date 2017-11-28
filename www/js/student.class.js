class Student extends Person {
	
	defaults(){
		return {
			firstName: 'John',
			lastName: 'Irving',
			pNo: undefined,
			favColor: undefined,
			courses: []
		}
	}

	beginCourse(course){
		this.courses.push(course);
	}
}




/* gammal
class Student extends Person {
	
	constructor(firstName, lastName, pNo){
		// I en ärvd klass MÅSTE super(med inparametrar) anropas i barn-konstruktorn
		super(firstName, lastName, pNo);
		// Ny egenskap unik för Student
		this.courses = [];
	}

	beginCourse(course){
		this.courses.push(course);
	}
}
*/