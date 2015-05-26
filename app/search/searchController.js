(function () {
    scControllers = angular.module('scControllers', [
        'scServices'
    ]);

    scControllers.controller('SearchController', [
        'SearchService',
        function (SearchService) {

            var vm = this;
            vm.term = "";
            var results = [];
            var searchFilter = "Artists";
            //vm.service = SearchService;

            vm.change = function (newSearch) {
                searchFilter = newSearch;
            };

            vm.category = function () {
                return searchFilter;
            };

            vm.getResults = function (searchFor) {
                console.log(searchFilter);
                var category = searchFilter.toLowerCase();
                SearchService.getSearchText(searchFor, category).then(function (data) {
                    results = data;
                });
                return results;
            };

            vm.setSelection = function (selectionURL) {
                SearchService.setSelection(selectionURL);
            };

            vm.searched = false;

            vm.toggleSearched = function () {
                vm.searched = !vm.searched;
            };

        }
    ]);

}());