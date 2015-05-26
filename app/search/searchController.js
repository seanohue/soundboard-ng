(function() {
    searchControllers = angular.module('searchControllers', [
        'scServices'
    ]);

    searchControllers.controller('SearchController', [
        'SearchService',
        function(SearchService) {

            var vm = this;
            vm.term = "";
            var currentPage = 0;
            vm.pageSize = 4;
            var results = [];
            var searchFilter = "Artists";
            //vm.service = SearchService;

            vm.nextPage = function() {
                currentPage++;
            };

            vm.previousPage = function() {
                currentPage--;
            };

            vm.startingPoint = function() {
                return currentPage * vm.pageSize;
            }

            vm.isLastPage = function() {
                return currentPage >= vm.getResults().length / vm.pageSize - 1;
            };

            vm.isFirstPage = function() {
                return currentPage == 0;
            };

            vm.getResults = function() {
                return results;
            }

            vm.change = function(newSearch) {
                searchFilter = newSearch;
            };

            vm.category = function() {
                return searchFilter;
            };

            vm.doSearch = function(searchFor) {
                console.log(searchFilter);
                var category = searchFilter.toLowerCase();
                SearchService.getSearchText(searchFor, category).then(function(data) {
                    results = data;
                });
                return results;
            };

            vm.setSelection = function(selectionURL) {
                SearchService.setSelection(selectionURL);
            };

            vm.searched = false;

            vm.toggleSearched = function() {
                vm.searched = !vm.searched;
            };

        }
    ]);

}());