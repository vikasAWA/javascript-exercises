const removeFromArray = function(anArr, ...args) {
    for (let argument of args) {
        let i = 0;
        while (i < anArr.length) {
            if (anArr[i] === argument) {
                anArr.splice(i, 1);
            } else {
                i++;
            }
        }
        } 
        return anArr;
}
console.log(removeFromArray([1, 2, 3, 4], 3, 2))

// Do not edit below this line
module.exports = removeFromArray;


