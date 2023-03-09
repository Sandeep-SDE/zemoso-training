// let myname: String = "sandeep";
// let num: Number = 123456789;
// let bool: boolean = true;
// console.log(myname, num, bool);
// const number: Number[] = [1, 2, 3];
// numbers.push(4);
// let heads: Number = numbers[0];
// console.log(head);
//tuples
var tus = [1, "sandeep", true];
console.log(tu); //[ 1, 'sandeep', true ]  
tu.push("Hi I'm new one");
console.log(tu); ////[ 1, 'sandeep', true, "Hi I'm new one" ]  no type guarentee
/**
 * Objects and typing
 *
 */
var objs = {
    firstname: "abc",
    lastName: "xyz",
    age: 1 - 100
};
console.log(obj);
/**
 * Enums
 */
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.NotFound);
console.log(StatusCodes.Success);
var carYear = 2001;
var carType = "Toyota";
var carModel = "Corolla";
var car = {
    year: carYear,
    type: carType,
    model: carModel
};
console.log(car);
/**
 * Functions  in type script
 */
function digitSum(num) {
    var sum = 0;
    while (num > 0) {
        sum = sum + (num % 10);
        num = num / 10;
    }
    return 0;
}
console.log(digitSum(25));
var User = /** @class */ (function () {
    function User(userName, userEmail) {
        this.userName = userName;
    }
    User.prototype.getUserName = function () {
        return this.getUserName;
    };
    User.prototype.setUserName = function (name) {
        this.userName = name;
    };
    User.prototype.getUserEmail = function () {
        return this.getUserEmail;
    };
    User.prototype.setUserEmail = function (mail) {
        this.userEmail = mail;
    };
    return User;
}());
var object = new User("sandeep", "sandeep@gmai.com");
