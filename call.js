const normalPerson = {
    salary : 40000,
    getSalary: function(amount,tax){
        this.salary = this.salary - (amount+ tax);
        return this.salary;
    }
}
const anotherPerson = {
    salary :3343,
}
const anotherBill = normalPerson.getSalary.call(anotherPerson, 444,100);
console.log(anotherBill);
const anotherBill1 = normalPerson.getSalary.call(anotherPerson, 500,10);
console.log(anotherBill1);