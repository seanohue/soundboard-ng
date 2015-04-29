 var app = angular.module('app', [
 	'plangular',
 	'scKey'
 	])
      .config(function(plangularConfigProvider){
        plangularConfigProvider.clientId = 'clientId';
      });