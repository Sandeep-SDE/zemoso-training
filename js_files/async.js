

/**
 * 
 * Implementing callback functions
 * 
 */


// const func = (num1, num2, mul) => {
//     let num = mul(num1, num2);
//     console.log(num);
//     return num1 + num2;
// }

// const mul = (num1, num2) => {
//         return num1 * num2;
//     }

// console.log(func(5, 5, mul));

/**
 * Implement the promise
 */

// const Ipromise = new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//         console.log("Im here")
//         resolve("msg send");
//    },3000);
// })

// const conFunction = ()=>{
//     Ipromise.then((msg)=>{
//         console.log(msg);
//     }).catch(err=>{
//         console.log(err);
//     });
// }

const awaitTimeout = delay =>
  new Promise((resolve, reject) => setTimeout(reject, delay));

awaitTimeout(3000).then(() => console.log('Hi')).catch(()=>{
    console.log("reject");
})
// Logs 'Hi' after 300ms

// const f = async () => {
//   await awaitTimeout(300);
//   console.log('Hi');  // Logs 'Hi' after 300ms
// };




/**
 * Implement the async and await
 */

// const myAssync = async (num1, num2)=>{
//     let mul = 0;
//    let promise = new Promise((resolve, reject)=>{
//     // setTimeout(()=>{
//     //     console.log("this is me");
//     //     resolve(()=>{
//     //         return num1*num2;
//     //     });
//     // },3000);
//     resolve(num1*num2);
//    });

//    return await promise;
// }

// console.log(myAssync().then((ms)=>console.log(ms)));