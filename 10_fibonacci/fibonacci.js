const fibonacci = function(a) {
    let f = 1;
    for( let i = 0; i < a; i++) {
        f += i;
    }
    return f
};

// Do not edit below this line
module.exports = fibonacci;
