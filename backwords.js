// -- solve the same problem but without the reverse

let str = "the sky is blue" // this "str" is in global scope

function changeOrder (str) { // now "str" variable is prioritized in the block scope
    let originalArray = str.split("")
    return originalArray
    
    // turning "str" (in the block scope) to a brand new array
                  //(orginalArray) of all of the components in the str that is what .split does
//     let jointStr= '' // this WILL BE our final reverse string 
//     for (let i=originalArray.length - 1; i>=0;i--) { // initializing the position of the string (and the evaluating factor) and subtracting 1 because it will add one automatically // setting the condition to be greater than or equal to 0 and for it to CONTINUE as long as the evalating facor is greater than or equal to 0// having it go backwards in the string 
//         jointStr += originalArray[i] // add the letter at the index i to the end of jointStr
//     }
//     return jointStr
}

// below this line is in play for either one 
console.log(changeOrder(str))// this is the "str" in the global scope
// same as 
      //console.log(changeOrder("the sky is blue"))

      //console.log(changeOrder(str))// this is the "str" in the global scope
// same as

      //console.log(changeOrder("the sky is blue")) 

      a => 2 * 3

      
