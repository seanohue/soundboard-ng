(function(){
	var scFilters = angular.module('scFilters', [
		'scControllers'
		]);

	scFilters.filter('playlistFilter', ['$scope', function($scope){
		//do a filter thing
		//how do I do this????
		//I would need to find out if something is playing or not.
		//Maybe I could just autoplay the first track on Now Playing.
		//hmmm
		//set current index (pass in $index with a function on click, stored in controller. controller has songplaying variable and use limitTo: 1)
	}]);