exports = (typeof window === 'undefined') ? global : window;

exports.logicalOperatorsAnswers = {
    or: function (a, b) {
        if(a == true){
            return a;

        } else if (b == true) {
            return b;

        } else {
            return false;
        }
    },

    and: function (a, b) {
        if(a == false){
            return a;

        } else if (b == false) {
            return b;

        } else {
            return true;
        }
    }
};
