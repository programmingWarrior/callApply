class person {
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}
const heroPerson = new person("shawon", "ahmed", 1000000);
console.log(heroPerson);
const friendlyPerson = new person("hero", "Alom", 13223);
console.log(friendlyPerson);

function Person(firstName,lastName,salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}
const oldperson = new Person("dfds", " dsfff", 1333);
console.log(oldperson);