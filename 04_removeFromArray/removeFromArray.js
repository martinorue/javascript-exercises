const removeFromArray = function () {
    const arr = arguments[0];
    const args = [...arguments];
    const numsDelete = args.slice(1);
    const ret = arr.filter(item => !numsDelete.includes(item));
    return ret;
};

// Do not edit below this line
module.exports = removeFromArray;
