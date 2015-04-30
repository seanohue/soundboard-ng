(function(){	 

	 var app = angular.module('app', [
	 	'plangular',
	 	'scKey',
	 	'clientID',
	 	'scControllers'
	 	])
	    .config(['clientID', function(plangularConfigProvider, clientID){
	        plangularConfigProvider.clientId = clientID;
	    }]);
})()