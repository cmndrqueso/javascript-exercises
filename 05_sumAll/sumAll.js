const sumAll = function(x,y) {
    let sum = 0;
    let start = 0;
    let end = 0;
    if(x < 0 || y < 0) {
        return 'ERROR';
    }
    else if (typeof x !== 'number' || typeof y !== 'number') {
        return 'ERROR';
    }
    else if (x < y) {
        start = x;
        end = y;
    }
    else if (x > y){
        start = y;
        end = x;
    }
    for (let i = start; i <= end; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
