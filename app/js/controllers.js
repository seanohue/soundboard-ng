(function(){
	var scControllers = angular.module('scControllers', [
		]);
	
	scControllers.controller('DisplayController', ['$scope', function($scope) {
	  var vm = this;
	  vm.playingNow = false;
	  vm.greeting = 'SoundBoard';
	  vm.togglePlay = function(){
	  	console.log(vm.playingNow);
	  	console.log("toggling so hard right now")
	  	vm.playingNow = !vm.playingNow;
	  	console.log(vm.playingNow);
	  };
	  vm.nowPlaying = function(){
	  	return vm.playingNow;
	  }
	}]);

})();