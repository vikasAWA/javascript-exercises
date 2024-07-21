const fibonacci = function(position) {
    if (position < 0) {
        return "OOPS";
    }
    let fibArray = [0, 1]; 
    for (let i = 2; i <= position; i++) {
        fibArray[i] = fibArray[fibArray.length-1] + fibArray[fibArray.length - 2];
    }
    return fibArray[position];
};


// Do not edit below this line
module.exports = fibonacci;
