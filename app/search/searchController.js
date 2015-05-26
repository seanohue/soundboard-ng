(function () {
    scControllers = angular.module('scControllers', [
        'scServices'
    ]);

    scControllers.controller('SearchController', [
        'SearchService',
        function (SearchService) {

            var vm = this;
            vm.term = "";
            vm.results = [];
            vm.searchFilter = "Artists";

            vm.change = function (newSearch) {
                vm.searchFilter = newSearch;
            };

            vm.category = function () {
                return vm.searchFilter;
            };

            vm.getResults = function (searchFor) {
                var searchFor = searchFor.toLowerCase();
                console.log(vm.searchFilter);
                var category = vm.searchFilter.toLowerCase();
                SearchService.getSearchText(searchFor, category).then(function (data) {
                    vm.results = data;
                });
                return vm.results;
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

})();