
import fetch from "node-fetch";
//globalThis.fetch = fetch
// function getData() {
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then(res=> res.json())
//     .then(data=> console.log(data))
// }
//getData();
 function getData(uId) {
    let res;
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            res = data
        });
    return {
        email: `${uId}@gmail.com`,
        result: res
    };
}

console.log("start");
var email = getData("skc");
console.log("Email id of the user id is: " + email.email);
console.log("end");