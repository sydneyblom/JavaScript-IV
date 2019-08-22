// CODE here for your Lambda Classes
class Person{
    constructor(name, age, location){
      this.name = name;
      this.age = age;
      this.location = location;
      //console.log(this);
    }// write methods here
    speak(){
      return `Hello my name is ${this.name}. I am from ${this.location}`;
    }
  }// this closes the parent

  class Instructor extends Person{
    constructor(name, age, location, specialty, favLanguage, catchPhrase){
      super(name, age, location); // super replaces parent.call
      this.specialty = specialty
      this.favLanguage = favLanguage
      this.catchPhrase = catchPhrase
    }
    demo (subject) {
        console.log(`Today we learned about ${subject}`)
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect grade on ${subject}`);
    }

    gradeStudent(student) {
        student.grade += Math.random() * (100-1) + 1;
    }
  }


  class Student extends Person{
    constructor(name, age, location, previousBackground, className, favSubjects){
      super(name, age, location); // super replaces parent.call
      this.previousBackground = previousBackground;
      this.className = className;
      this.favSubjects = favSubjects;   
      this.grade = Math.random() * (100-1) + 1
    }

    listSubjects() {
        console.log(this);
        for (let i = 0; i < this.favSubjects.length; i++) {
            console.log(this.favSubjects[i]);
        }
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun a sprint subject on ${subject}`);
    }

    graduate() {
        if (this.grade >= 70) {
            console.log(`${this.name} has graduated`);
            return true;
        }
        else {
            return false;
        }
    }
  }


  class projectManager extends Instructor{
    constructor(name, age, location, specialty, favLanguage, catchPhrase, gradClassName, favInstructor){
      super(name, age, location, specialty, favLanguage, catchPhrase); // super replaces parent.call
      this.gradClassName = gradClassName
      this.favInstructorName = favInstructor
    }

    standup(channel) {
        console.log(`${this.name} announces to ${channel}, @${channel} standy times!`);
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
  }

let Sydney = new Student('Sydney', '30', 'Austin, TX', 'Ad Ops', 'Web 23', ['CSS', 'Javascript']);

Sydney.speak();
Sydney.listSubjects();
Sydney.PRAssignment('Javascript-IV');
Sydney.sprintChallenge('Javascript');

let Sampson = new Instructor('Sampson', '21', 'New York, NY', 'Web Development', 'Javascript', 'Do the Dew');
Sampson.speak();
Sampson.demo('Javascript-IV');
Sampson.grade(Sydney, 'Javascript-IV');

let Brit = new projectManager('Brit', '21', 'Canada', 'Web Development', 'Javascript', 'Taste The Rainbow', '2015', Sampson.name);

Brit.speak();
Brit.standup('Web23');
Brit.debugsCode(Sydney, 'Javascript-IV');

while (Sydney.graduate === false) {
    Devon.gradeStudent(Sydney);
}





