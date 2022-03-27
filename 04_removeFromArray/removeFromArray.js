const removeFromArray = function(array, ...elementToRemove) {
    let newArray = array; 
    for (let i = 0; i < elementToRemove.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] === elementToRemove[i]){
                array.splice(j, 1);
                newArray = array;
            }
            else {
                continue;
            }
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
