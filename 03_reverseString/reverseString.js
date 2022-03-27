// We have to reverse a sting of the
// convert a string into an array (split() method)
//get array length
//starts a lopop from the last array index num (Array.lenght -1)
// Pops the last array element 
//Creates new array and push() the popped item


const reverseString = function(string) {
    const reverseStringArray = [];
    for (let i = string.length - 1; i >= 0; i--) {
    reverseStringArray.push(string[i]);
    }
    return reverseStringArray.join('');

};
// 10 
//


// Do not edit below this line
module.exports = reverseString;
