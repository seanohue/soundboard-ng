(function() {
    scControllers = angular.module('scControllers', [
        'scServices'
    ]);

    scControllers.controller('PlayerController', [
        '$scope',
        'SearchService',
        function($scope, SearchService) {

            var vm = this;
            vm.playingNow = false;
            vm.trackCounter = 0; //use this to keep track rather than $index

            vm.nextTrack = function() {
                vm.trackCounter++;
                console.log('next');
            };

            vm.previousTrack = function() {
                vm.trackCounter--;
                console.log('last');
            };

            vm.resetCounter = function() {
                vm.trackCounter = 0;
                console.log('reset');
            }

            vm.togglePlay = function(status) {
                if (status === undefined) {
                    console.log(vm.playingNow);
                    console.log("toggling so hard right now");
                    vm.playingNow = !vm.playingNow;
                    console.log(vm.playingNow);
                } else {
                    vm.playingNow = status;
                    console.log('status is ' + status + ' and play is set to ' + vm.playingNow);
                };
            };

            vm.getSelection = function() {
                return SearchService.getSelection() + "/tracks";
            };

            vm.nowPlaying = function() {
                return vm.playingNow;
            };

        }
    ]);

})();