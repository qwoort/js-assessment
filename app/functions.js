exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
    argsAsArray: function (fn, arr) {
        return fn.apply(this, arr);
    },

    speak: function (fn, obj) {
        return fn.bind(obj)();
    },

    functionFunction: function (str) {
        return function (newString) {
            return str + ', ' + newString;
        }
    },

    makeClosures: function (arr, fn) {
        return arr.map(function (num) {
            return function () {
                return fn(num);
            }
        });
    },

    partial: function (fn, str1, str2) {
        return function (str3) {
            return fn(str1, str2, str3);
        }
    },

    useArguments: function () {
        var args = Array.prototype.slice.call(arguments);
        return args.reduce(function (prev, curr) {
            return prev + curr;
        })
    },

    callIt: function (fn) {
        var args = Array.prototype.slice.call(arguments, 1);
        return fn.apply(null, args);
    },

    partialUsingArguments: function (fn) {
        var firstArgs = Array.prototype.slice.call(arguments, 1);

        return function () {
            var secondArgs = Array.prototype.slice.call(arguments);

            return fn.apply(null, firstArgs.concat(secondArgs));
        }
    },

    curryIt: function (fn) {
        var argsNum = fn.length;
        var args = [];

        var partialFunc = function (arg) {
            args.push(arg);

            if(args.length === argsNum){
                return fn.apply(this, args);
            } else {
                return partialFunc;
            }
        }

        return partialFunc;

    }
};
