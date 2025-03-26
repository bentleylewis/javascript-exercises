const removeFromArray = function(array1, ...args) {
    const result = [];

    for (let i = 0; i < array1.length; i++) {
        if (!args.includes(array1[i])) {
            result.push(array1[i]);
        }
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
