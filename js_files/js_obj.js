



const person ={
    first : "Mudigonda",
    lastName: "Sandeep",
    // getfulName : function func(){
    //     return this.first+this.lastName;
    // },
    getfulName : function () {
             return this.first+this.lastName;
         },
    //getfulName : ()=>  this.first+this.lastName,//we cann't use the this keyword in arrow function
    address : {
        town : "DVK",
        HNO: "20-18-144",
        dist : "Nalg"
    }
}
console.log(delete person.first," ", person);
console.log(person, Object.keys(person), Object.values(person));
for(val in person){
    console.log(val," : ",person[val]);
}

console.log(person.address["town"]);

//console.log(person.getfulName) //[Function: func]

//console.log(person.getfulName) // MudigondaSandeep

//console.log(person.getfulName());


/**
 * Function as an Object
 */

 UserDetails = function () {
    // this.name = "Sandeep";
    // this.age = 22;
    let data= 20;
    function getName(){
        return data;
    }

    return getName()
}

//const user = new UserDetails();

//console.log(UserDetails());