const reverseString = function(word) {
    let letters = word.split("");
    let reverseArray = letters.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
};

// Do not edit below this line
module.exports = reverseString;
