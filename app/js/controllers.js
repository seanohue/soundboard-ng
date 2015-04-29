(function(){
	var scControllers = angular.module('scControllers', [

		]);
	
	scControllers.controller('DisplayController', ['$scope', function($scope) {
	  var vm = this;
	  vm.greeting = 'SoundBoard';
	}]);

})();