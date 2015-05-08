(function(){
	var scControllers = angular.module('scControllers', [
		'scServices'
		]);

	scControllers.controller('PlayerController', [
		'$scope', 
		function($scope) {
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


	scControllers.controller('DisplayController', [
		'$scope', 
		function($scope) {
		var vm = this;
		vm.active = 'now';
		vm.setNav = function(nav){
			vm.active = nav;
		}
		vm.getActive = function(){
			return vm.active;
		}
	}]);

	scControllers.controller('SearchController', [
		'$scope', 
		'SearchService',
		function($scope, SearchService) {
		var vm = this;
		vm.term = "I don't even know what a computer is.";
		vm.searchFilter = "Artists";
		vm.change = function(newSearch){
			vm.searchFilter = newSearch;
		};
		vm.category = function(){
			return vm.searchFilter;
		};
		vm.getResults = function(searchFor, category){
			searchFor = searchFor.toLowerCase();
			category = category.toLowerCase();
			return SearchService.getResults(searchFor, category);
		};

	}]);


})();