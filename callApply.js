const normalPerson = 
{
    firstName : 'mokbul',
    lastName : "uddin",
    amount : 1400,
    fullName : function(){
       const fullNames =  this.firstName+ this.lastName;
       return fullNames;
    },
    chargebill : function(){
        this.amount - 1000;
    }
}

const chargeBill = normalPerson.chargebill(2000);
console.log(chargeBill);