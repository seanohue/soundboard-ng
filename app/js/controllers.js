(function(){
	var scControllers = angular.module('scControllers', [
		'scServices'
		]);

	scControllers.controller('PlayerController', [
		'$scope', 
		function($scope) {
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
		vm.term = "";
		vm.results = []
		vm.searchFilter = "Artists";
		vm.change = function(newSearch){
			vm.searchFilter = newSearch;
		};
		vm.category = function(){
			return vm.searchFilter;
		};
		vm.getResults = function(searchFor){
			var searchFor = searchFor.toLowerCase();
			console.log(vm.searchFilter);
			var cat = vm.searchFilter.toLowerCase();
			return SearchService.getResults(searchFor, cat);
		};
		vm.getSearchText = function(searchFor){
			var searchFor = searchFor.toLowerCase();
			console.log(vm.searchFilter);
			var cat = vm.searchFilter.toLowerCase();
			vm.results = SearchService.getSearchText(searchFor, cat);
			console.log("recorded results are: " + vm.results);
			return vm.results;
		};
		vm.searched = false;
		vm.toggleSearched = function(){
			vm.searched = !vm.searched;
		}

	}]);

})();