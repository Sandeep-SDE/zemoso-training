

function catchErr (num1, num2){
    try{
        if(num2 > 0){
            return num1/num2;
        }else{
            throw "Deniminator cannot be zero or negative"
        }
    }catch(err){
        console.log("exception :: "+ err);
    }
}


catchErr(5,0);