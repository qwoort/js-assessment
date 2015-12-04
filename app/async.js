exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
    async: function (value) {

        return new Promise(function (resolve) {
            resolve(value);
        });

    },

    manipulateRemoteData: function (url) {

        return new Promise(function (resolve) {
            var r = new XMLHttpRequest();
            r.open('GET', "/data/testdata.json", true);
            r.send();

            r.onreadystatechange = function () {
                if (r.readyState !== XMLHttpRequest.DONE) {
                    return;
                }
                if (r.status !== 200) {
                    return;
                }

                resolve((function () {
                    var response = JSON.parse(r.responseText).people;

                    return response
                        .map(function (person) {
                            return person.name;
                        })
                        .sort()
                    ;
                    
                })());
            };

        });

    }
};
