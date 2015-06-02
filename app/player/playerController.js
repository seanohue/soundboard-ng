(function() {
    playerControllers = angular.module('playerControllers', [
        'scServices'
    ]);

    playerControllers.controller('PlayerController', [
        'SearchService',
        function(SearchService) {

            var vm = this;
            var isPlayingNow = false;
            var trackCounter = 0; //used instead of $index

            vm.getTrackCounter = function() {
                return trackCounter;
            };

            vm.nextTrack = function() {
                trackCounter++;
            };

            vm.previousTrack = function() {
                trackCounter--;
            };

            vm.togglePlay = function(playStatus) {
                if (playStatus === undefined) {
                    isPlayingNow = !isPlayingNow;
                } else {
                    isPlayingNow = playStatus;
                }
            };

            vm.getSelection = function() {
                return SearchService.getSelection() + "/tracks";
            };

            vm.nowPlaying = function() {
                return isPlayingNow;
            };

        }
    ]);

}());