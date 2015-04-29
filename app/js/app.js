 var app = angular.module('app', [
 	'plangular',
 	'scKey',
 	'DisplayController'
 	])
      .config(function(plangularConfigProvider){
        plangularConfigProvider.clientId = 'clientId';
      });