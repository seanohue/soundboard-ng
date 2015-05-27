(function() {

    var app = angular.module('app', [
            'plangular',
            'searchControllers',
            'playerControllers',
            'loginControllers',
            'ngRoute',
            'scFilters'
        ])
        .config(function(plangularConfigProvider) {
            plangularConfigProvider.clientId = "0b1b5623bddcf8d73545c97a7d12957c";
        });

    app.config(['$routeProvider', function($routeProvider) {

        $routeProvider.when("/", {
            //controller: "PlayerController",
            templateUrl: 'player/now-playing.html'
        });

        $routeProvider.when("/search", {
            //controller: "DisplayController",
            templateUrl: 'search/search.html'
        });

        $routeProvider.when("/login", {
            //controller: "DisplayController",
            templateUrl: 'login/login.html'
        });

    }]);
})()