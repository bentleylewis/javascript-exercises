const sumAll = function(beginning, end) {
    let sum = 0;
    if (Number.isInteger(beginning) && Number.isInteger(end) && beginning >= 0 && end >=0) {

        if (beginning <= end) {
            for (let i = beginning; i < end + 1; i++) {
                sum += i;
            }
        }
        
    
        else {
                for (let i = beginning; i > end - 1; i--) {
                    sum += i;
                }
            
        }

        return sum;
    }

    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
