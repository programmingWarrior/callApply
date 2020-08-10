const normalPerson = {
    firstName: "Shohel",
    lastName: "Howlader",
    salary :15000,
    getFullName: function(){
        console.log(this.firstName + " " + this.lastName);
    },

    chargeBill: function(amount){
      this.salary =  this.salary - amount;
      return this.salary;
    }

};
// console.log(normalPerson.lastName);

normalPerson.chargeBill(5555);
console.log(normalPerson.salary);

