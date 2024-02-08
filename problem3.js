
function deleteInvalids(array) {
    if(!Array.isArray((array))){
        return "Invalid Array"
    }
    const numbers = [];
    for(let i =0; i<array.length; i++){
        if(typeof array[i]==="number" && !isNaN(array[i])){
            numbers.push(array[i]);
        }
    }
    return numbers;
    }
    console.log(deleteInvalids({num: [ 1 , 2 , 3 ]}));