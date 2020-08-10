const countMan = {
    firstName : "shawon",
    lastName : "Ahmed",
    salary : 40000,
    getFullName : function(){
        const fullName = this.firstName+" "+this.lastName;
        return fullName;
    },
    getChargeBill : function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    },
}

const heroPerson = {
    firstName : "Hero",
    lastName : "Alom",
    salary: 4444,
};

const friendlyPerson = {
    firstName : "Naro",
    lastName : "Alom",
    salary: 3333,
};

const heroBillCharge  =countMan.getChargeBill.bind(heroPerson);
console.log(heroBillCharge(555));

const friendlyPersonBill = countMan.getChargeBill.bind(friendlyPerson);
console.log(friendlyPersonBill(440));
console.log(countMan.salary);