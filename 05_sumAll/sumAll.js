const sumAll = function(start, end) {
    sum = 0;
    if (Number.isInteger(start) && Number.isInteger(end) && start > 0 && end > 0) {
        if (start < end) {
            for (i = start; i <= end; i++) {
                sum += i;
            }
            return sum;
        } else {
            for (i = end; i <= start; i++) {
                sum += i;
            } 
            return sum;
        }
    } else {
        return "ERROR";
    }
    
};

// Do not edit below this line
module.exports = sumAll;

