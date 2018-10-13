angular.module("blog")
.controller("createCtrl", function ($scope, postSrvc) {

    $scope.post = {};

    $scope.createPost = function() {
        if (postSrvc.validate($scope.post)) {
            postSrvc.create($scope.post).then(function(response) {
                console.log(response + "\n" + $scope.post)
            })
        }
    };

});