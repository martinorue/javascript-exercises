const repeatString = function (text, number) {
    if (number < 0) return 'ERROR';
    let ret = '';
    for (let i = 0; i < number; i++) {
        ret += text;
    }
    return ret;
};

// Do not edit below this line
module.exports = repeatString;
