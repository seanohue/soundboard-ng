(function(){	 

	 var app = angular.module('app', [
	 	'plangular',
	 	'scKey',
	 	'scControllers'
	 	])
	      .config(function(plangularConfigProvider){
	        plangularConfigProvider.clientId = 'clientId';
	      });

})()