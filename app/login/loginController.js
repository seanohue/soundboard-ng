(function() {
    loginControllers = angular.module('loginControllers', []);

    loginControllers.controller('loginController',
        function() {

            var vm = this;
            vm.user = "";
            vm.pw = "";

            vm.reset = function() {
                console.log("resetting");
                vm.user = "";
                vm.pw = "";
                console.log(vm.user + "" + vm.pw);
            };

        }
    );

}());