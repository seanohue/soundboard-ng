(function(){
	var scControllers = angular.module('scControllers', [
		]);

	scControllers.controller('PlayerController', ['$scope', function($scope) {
	  var vm = this;
	  vm.playingNow = false;
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
		vm.changeSearch = function(newSearch);
			vm.searchingFor = newSearch;
		};
		vm.searchTerms = function(){
			return vm.searchingFor;
		};

	}]);


})();