(function() {
    playerControllers = angular.module('playerControllers', [
        'scServices'
    ]);

    playerControllers.controller('PlayerController', [
        'SearchService',
        function(SearchService) {

            var vm = this;
            var playingNow = false;
            var trackCounter = 0; //use this to keep track rather than $index

            vm.getTrackCounter = function() {
                return trackCounter;
            };

            vm.nextTrack = function() {
                trackCounter++;
                console.log('next');
            };

            vm.previousTrack = function() {
                trackCounter--;
                console.log('last');
            };

            vm.resetCounter = function() {
                trackCounter = 0;
                console.log('reset');
            };

            vm.togglePlay = function(status) {
                if (status === undefined) {
                    console.log(playingNow);
                    console.log("toggling so hard right now");
                    playingNow = !playingNow;
                    console.log(playingNow);
                } else {
                    playingNow = status;
                    console.log('status is ' + status + ' and play is set to ' + playingNow);
                }
            };

            vm.getSelection = function() {
                return SearchService.getSelection() + "/tracks";
            };

            vm.nowPlaying = function() {
                return playingNow;
            };

        }
    ]);

}());