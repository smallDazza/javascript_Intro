

function isTruthy(array) {
    let count = 0;
    for (let value of array){
        if (value) count++;
    }
    return count;
}

result = isTruthy([0,1,2,3,4,5,null,undefined]);
console.log(result);