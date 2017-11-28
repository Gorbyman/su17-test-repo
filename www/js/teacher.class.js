class Teacher extends Person {
	
	defaults(){
		return {
			firstName: 'John',
			lastName: 'Doe',
			pNo: undefined,
			favColor: undefined,
			teachingCourses: []
		}
	}

	startTeachingCourse(course){
		this.teachingCourses.push(course);
	}
}





/* gammal
class Teacher extends Person {
	
	constructor(firstName, lastName, pNo){
		super(firstName, lastName, pNo);
		this.teachingCourses = [];
	}

	startTeachingCourse(course){
		this.teachingCourses.push(course);
	}
}*/