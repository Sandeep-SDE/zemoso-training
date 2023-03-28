async function f() {

    let  promise = new Promise((resolve, reject) => {
    // setTimeout(() =>{resolve("resolved")}, 3000);
    setTimeout(()=>{reject("Error"),2000});
    });
    promise.then(
       (value)=>{console.log(value)},
       (reason)=>{console.log(reason)},
    )
    .catch(
        (error)=>{console.log(error)}
    );

    let result = await promise; // wait until the promise resolves (*)
    console.log("after promise")
    return result
  }
  
  f()