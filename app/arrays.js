exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

    indexOf: function (arr, item) {

        for (var i = 0; i < arr.length; i++) {
            if (item === arr[i]) {
                return i;
            }
        }

        return -1;

    },

    sum: function (arr) {

        var buffer = 0;

        for (var i = 0; i < arr.length; i++) {
            buffer += arr[i];
        }

        return buffer;

    },

    remove: function (arr, item) {

        function removeElement(array, i) {
            for (var j = i; j < array.length - 1; j++) {
                array[j] = array[j + 1];
            }
            array.length--;
        }

        for (var i = 0; i < arr.length; i++) {
            while (item === arr[i]) {
                removeElement(arr, i);
            }
        }

        return arr;

    },

    removeWithoutCopy: function (arr, item) {

        function removeElement(array, i) {
            for (var j = i; j < array.length - 1; j++) {
                array[j] = array[j + 1];
            }
            array.length--;
        }

        for (var i = 0; i < arr.length; i++) {
            while (item === arr[i]) {
                removeElement(arr, i);
            }
        }

        return arr;
    },

    append: function (arr, item) {

        arr[arr.length] = item;

        return arr;
    },

    truncate: function (arr) {

        arr.length--;

        return arr;
    },

    prepend: function (arr, item) {

        var length = arr.length;

        for (var i = length; i >= 0; i--) {
            arr[i] = arr[i - 1];
        }

        arr[0] = item;

        return arr;
    },

    curtail: function (arr) {

        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i + 1];
        }

        arr.length--;

        return arr;
    },

    concat: function (arr1, arr2) {

        for (var i = 0; i < arr2.length; i++) {
            arr1[arr1.length] = arr2[i];
        }

        return arr1;

    },

    insert: function (arr, item, index) {

        for (var i = arr.length; i > index; i--) {
            arr[i] = arr[i - 1];
        }

        arr[index] = item;

        return arr;
    },

    count: function (arr, item) {

        var cnt = 0;

        for (var i = 0; i < arr.length; i++) {
            if(arr[i] === item) {
                cnt++;
            }
        }

        return cnt;
    },

    duplicates: function (arr) {

        var duplications = [];

        var sawn = [];

        function elementIsSawn(element){

            for(var i = 0; i < sawn.length; i++){
                if(sawn[i] === element){
                    return true;
                }
            }

            return false;
        }

        function elementIsInDuplicatedAgain(element){

            for(var i = 0; i < duplications.length; i++){
                if(duplications[i] === element){
                    return true;
                }
            }

            return false;
        }

        for (var i = 0; i < arr.length; i++) {

            if(elementIsSawn(arr[i])){
                if(!elementIsInDuplicatedAgain(arr[i])){
                    duplications[duplications.length] = arr[i];
                }

            } else {
                sawn[sawn.length] = arr[i];
            }
        }

        return duplications;

    },

    square: function (arr) {

        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i] * arr[i];
        }

        return arr;
    },

    findAllOccurrences: function (arr, target) {

        var buffer = [];

        for (var i = 0; i < arr.length; i++) {
            arr[i] === target && (buffer[buffer.length] = i);
        }

        return buffer;
    }
};
