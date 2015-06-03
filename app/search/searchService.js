(function() {
    scServices = angular.module('scServices', []);

    scServices.factory('SearchService', [
        '$http',
        '$q',
        '$log',
        function($http, $q, $log) {

            var selection = "http://soundcloud.com/platform";

            return {
                getSearch: function(searchFor, category) {
                    searchFor = searchFor.toLowerCase();
                    console.log("Getting query results...");
                    var deferred = $q.defer();
                    //'artists' is used to make the UI more user-friendly, but this could still be refactored
                    if (category === 'artists') {
                        category = 'users';
                    };

                    var promise = $http.get('http://api.soundcloud.com/' + category + '?client_id=0b1b5623bddcf8d73545c97a7d12957c&q=' + searchFor);

                    promise.success(function(data) {
                        deferred.resolve(data);
                    }).error(function(msg, code) {
                        deferred.reject(msg);
                        $log.error(msg, code);
                    });
                    return deferred.promise;
                },

                setSelection: function(selectionURL) {
                    selection = selectionURL;
                },

                getSelection: function() {
                    return selection;
                }
            }
        }
    ]);
}());