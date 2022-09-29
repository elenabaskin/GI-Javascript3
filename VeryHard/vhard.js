class Person {
  constructor(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
  }
  exercise() {
    console.log("Yoga is the best!");
  }
  fetchJob() {
    console.log(`${this.name} is an ${this.job}.`);
  }
}

class Programmer extends Person {
  constructor(name, job, age, languages) {
    super(name, job, age);
    this.languages = languages;
    this.busy = true;
  }
  completeTask() {
    this.busy = false;
  }

  acceptNewTask() {
    this.busy = true;
  }

  offerNewTask() {
    if (this.busy === false) {
      console.log(`${this.name} would love to take on a new responsibility!`);
    } else {
      console.log(`${this.name} can't do that right now.`);
    }
  }

  learnLanguage(language) {
    this.languages.push(language);
  }

  listLanguages() {
    console.log(this.languages);
  }
}
const person = new Programmer("Elena", "apprentice", 22, ["CSS", "HTML"]);
const person2 = new Person("Minghao", "idol", 25);
console.log(person.name);
console.log(person.exercise());
console.log(person.fetchJob());

console.log(person.offerNewTask());
console.log(person.completeTask());
console.log(person.offerNewTask());
person.learnLanguage("JavaScript");
console.log(person.listLanguages());
