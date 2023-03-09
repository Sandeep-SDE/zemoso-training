


// // let myname: String = "sandeep";

// // let num: Number = 123456789;

// // let bool: boolean = true;

// // console.log(myname, num, bool);


// // const number: Number[] = [1, 2, 3];
// // numbers.push(4);
// // let heads: Number = numbers[0];
// // console.log(head);


// //tuples

// const tus: [Number, String, boolean] = [1, "sandeep", true];
// console.log(tu);//[ 1, 'sandeep', true ]  
// tu.push("Hi I'm new one");
// console.log(tu);            ////[ 1, 'sandeep', true, "Hi I'm new one" ]  no type guarentee

// /**
//  * Objects and typing
//  * 
//  */

// const objs: { firstname: String, lastName: String, age: Number } = {
//     firstname: "abc",
//     lastName: "xyz",
//     age: 1 - 100
// }

// console.log(obj);

// /**
//  * Enums
//  */

// enum StatusCodes {
//     NotFound = 404,
//     Success = 200,
//     Accepted = 202,
//     BadRequest = 400
// }
// console.log(StatusCodes.NotFound);
// console.log(StatusCodes.Success);

// /**
//  * Type defining and Alias
//  */
// type CarYear = number
// type CarType = string
// type CarModel = string
// type Car = {
//     year: CarYear,
//     type: CarType,
//     model: CarModel
// }

// const carYear: CarYear = 2001
// const carType: CarType = "Toyota"
// const carModel: CarModel = "Corolla"
// const car: Car = {
//     year: carYear,
//     type: carType,
//     model: carModel
// };

// console.log(car)


// /**
//  * Functions  in type script
//  */
// function digitSum(num:number) : number{
//     let sum:number = 0
//     while(num>0){
//         sum = sum + (num%10);
//         num = num/10;
//     }
//     return 0;
// }

// console.log(digitSum(25));


class User {
    private userName:String;
  //  private userEmail:String;
    public constructor(userName:String){
        this.userName = userName;
    }

      getUserName(){
        return this.getUserName;
    }

    setUserName(name:string){
        this.userName = name;
    }

    // getUserEmail(){
    //     return this.getUserEmail;
    // }

    // setUserEmail(mail:string){
    //     this.userEmail = mail;
    // }
}

const object:User = new User("sandeep");
