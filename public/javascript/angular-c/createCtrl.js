angular.module("blog")
.controller("createCtrl", function ($scope, postSrvc) {

    $scope.post = {};

    $scope.validatePost = function() {
        if (postSrvc.validatePost($scope.post)) {
            postSrvc.createPost($scope.post).then(function(response) {
                console.log(response + "\n" + $scope.post)
            })
        }
    };

});