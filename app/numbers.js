exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
    valueAtBit: function (num, bit) {
        var bitView = new Number(num).toString(2);
        var digit = bitView[bitView.length - bit];
        return +digit;
    },

    base10: function (str) {
        return +new Number('0b'+str);
    },

    convertToBinary: function (num) {
        var computedString = new Number(num).toString(2);

        var zeros = '';
        for(var i = computedString.length; i < 8; i++){
            zeros += '0';
        }
        return zeros + (new Number(num).toString(2));
    },

    multiply: function (a, b) {

    }
};
