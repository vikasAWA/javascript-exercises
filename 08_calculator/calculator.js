const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
  return array.reduce((total, currentItem) => {
    total += currentItem;
    return total;
  }, 0)
	
};

const multiply = function(arr) {
  return arr.reduce((prod, currentItem) => {
    prod *= currentItem; 
    return prod;
  }, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(number) {
	let fact = 1;
  for (let i = number; i > 0; i--) {
    fact *= i;
  }
  return fact;
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
