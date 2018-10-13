angular.module("blog")
.controller("createCtrl", function ($scope, $state, postSrvc) {

    $scope.post = {};

    $scope.createPost = function() {
        if (postSrvc.validate($scope.post)) {
            postSrvc.create($scope.post).then(function(response) {
                console.log(response);
                $state.go('main');
            })
        }
    };

    $scope.cancel = function() {
        $state.go('main');
    };

});