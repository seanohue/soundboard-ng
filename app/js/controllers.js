(function(){
	var scControllers = angular.module('scControllers', [
		]);

	scControllers.controller('PlayerController', ['$scope', function($scope) {
	  var vm = this;
	  $scope.playingNow = false;
	  vm.greeting = 'SoundBoard';
	  vm.togglePlay = function(){
	  	console.log(vm.playingNow);
	  	console.log("toggling so hard right now");
	  	vm.playingNow = !vm.playingNow;
	  	console.log(vm.playingNow);
	  };
	  vm.nowPlaying = function(){
	  	return vm.playingNow;
	  };
	}]);


	scControllers.controller('DisplayController', ['$scope', function($scope) {
		//maybe get the track index from plangular and use that to set $index? how would that work and would it even solve the problem?
		//or do a refesh?
		//or somehow send the track information along with whenever the next or prev button is pressed?!?!?!?!?!
		var vm = this;
		vm.active = 'now';
		vm.setNav = function(nav){
			vm.active = nav;
		}
		vm.getActive = function(){
			return vm.active;
		}
	}]);

	scControllers.controller('SearchController', ['$scope', function($scope) {
		var vm = this;
		vm.searchingFor = "Artists";
		vm.change = function(newSearch){
			vm.searchingFor = newSearch;
		};
		vm.term = function(){
			return vm.searchingFor;
		};

	}]);

})();