function firstLetterName(name) {
    let nameArray = Array.from(name);
    alert("The name " + name + " starts with the letter " + nameArray[0]);
    
    return nameArray[0];
}


function divisibleByTwo(x) {
    if(x % 2 == 0) {
        return true;
    } else {
        return false;
    }
}


function largestNum(array) {
   let largestNum = array[0];
   for(i = 0; i < array.length; i++) {
    if(array[i] > largestNum) {
        largestNum = array[i];
    } else {
        continue;
    }
   }
   return largestNum;
}

//Examples for calling each function (I used console.log to make it understandable in the browser):

console.log("The first letter in the name Nathaniel is " + firstLetterName("Nathaniel"));
console.log("The number 8 is divisible by 2: " + divisibleByTwo(8));
console.log("The number 5 is divisible by 2: " + divisibleByTwo(5));

let largestNumExample = [6,13,27,4,11]
console.log("The largest number in the array: " + largestNumExample + " is " + largestNum(largestNumExample));
