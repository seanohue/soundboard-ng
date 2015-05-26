(function() {
    var scFilters = angular.module('scFilters', []);

    scFilters.filter('truncate', function() {
        return function(text, length, end) {
            if (text !== undefined) {
                if (isNaN(length)) {
                    length = 12;
                }

                if (end === undefined) {
                    end = "...";
                }

                if (text.length <= length || text.length - end.length <= length) {
                    return text;
                } else {
                    return String(text).substring(0, length - end.length) + end;
                }
            }
        };
    });


    scFilters.filter('startFrom', function() {
        return function(input, start) {
            console.log("input: " + input);
            console.log("start: " + start);
            start = +start; //parse to int
            return input.slice(start);
        }
    });


}());