const repeatString = function(string, num) {
    const text = [];
    if (num < 0) {
        return "ERROR";
    }
    for (let i = 0; i < num; i++) {
        text.push(string);
    }
    return text.join('');

};

// Do not edit below this line
module.exports = repeatString;
