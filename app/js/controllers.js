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
	  vm.trackCounter = 0; //use this to keep track rather than $index

	  vm.togglePlay = function(){
	  	console.log(vm.playingNow);
	  	console.log("toggling so hard right now");
	  	vm.playingNow = !vm.playingNow;
	  	console.log(vm.playingNow);
	  };

	  vm.getSelection = function(){
	  	return SearchService.getSelection()+"/tracks";
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
			SearchService.getSearchText(searchFor, cat).then(function(data) {
                vm.results = data;
            });
			return vm.results;
		};
	
		vm.setSelection = function(selectionURL){
	  		console.log("pres butan " + selectionURL);
	  		SearchService.setSelection(selectionURL);
	  	};

		vm.searched = false;
		
		vm.toggleSearched = function(){
			vm.searched = !vm.searched;
		}

	}]);

})();