(function(){
	var scControllers = angular.module('scControllers', [
		]);

	scControllers.controller('PlayerController', ['$scope', function($scope) {
	  var vm = this;
	  vm.playingNow = false;
	  vm.greeting = 'SoundBoard';
	  vm.togglePlay = function(){
	  	vm.playingNow = !vm.playingNow;
	  };
	  vm.nowPlaying = function(){
	  	return vm.playingNow;
	  }
	}]);

})();