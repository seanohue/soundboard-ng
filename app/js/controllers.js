(function(){
	var scControllers = angular.module('scControllers', [
		'scServices'
		]);

	scControllers.controller('PlayerController', [
		'$scope', 
		'SearchService',
		function($scope, SearchService) {
	  var vm = this;
	  $scope.playingNow = false;
	  vm.greeting = 'SoundBoard';

	  vm.togglePlay = function(){
	  	console.log(vm.playingNow);
	  	console.log("toggling so hard right now");
	  	vm.playingNow = !vm.playingNow;
	  	console.log(vm.playingNow);
	  };

	  vm.getSelection = function(){
	  	return SearchService.selection+"/tracks";
	  };

	  vm.setSelection = function(selectionURL){
	  	SearchService.setSelection(selectionURL);
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
		'$timeout',
		function($scope, SearchService, $timeout) {
		var vm = this;
		vm.term = "";
		vm.results = [];
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
			// had to change this bit to include data, and make a .then call
			SearchService.getSearchText(searchFor, cat).then(function(data) {
                vm.results = data;
            });
			return vm.results;
		};
		//this function is no longer necessary, i think
		vm.getSearchText = function(searchFor){
			var searchFor = searchFor.toLowerCase();
			console.log(vm.searchFilter);
			var cat = vm.searchFilter.toLowerCase();	
			$timeout(function() {
				vm.results = SearchService.getSearchText(searchFor, cat);
				console.log("recorded results are: " + vm.results);
				console.log("timeout is working");
				//$scope.$apply();
        		//return vm.results;
      		}, 200);
		};

		vm.searched = false;
		vm.toggleSearched = function(){
			vm.searched = !vm.searched;
		}

	}]);

})();