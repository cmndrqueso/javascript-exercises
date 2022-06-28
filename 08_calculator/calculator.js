const add = function() {
  let x = arguments[0];
  let y = arguments[1];
  return x + y;
};

const subtract = function() {
	let x = arguments[0];
  let y = arguments[1];
  return x -y;
};

const sum = function(array) {
  return array.reduce((x, y) => x + y, 0);
}

const multiply = function(array) {
  return array.length
  ? array.reduce((x, y) => x * y)
  : 0;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
	let factorial = 1;
  for (let i = a; i > 0; i--){
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
