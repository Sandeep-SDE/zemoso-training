

/**
 *   program to demonstrate how a function can be passed as a parameter to another function
 */

function main(objFun){
    const obj = objFun();
    obj.town= "DEV";
    console.log(obj);
    delete obj.firstName;
    console.log(obj);
    return [obj];

}

const obj = function (){
    const userObj = {
        firstName : "Mudigonda",
        lastName : "Sandeep",
        contact : 12457890,
        email : "sandeep.mudigonda@zemosolabs.com"
    }
    return userObj;
}

console.log(main(obj));

/**
 *  An arrow function take two strings as an args and returns its first letter of two strings
 */

const arrowFunc = (str1, str2) => str1[0]+str2[0];

console.log(arrowFunc("Sandeep", "DP"));