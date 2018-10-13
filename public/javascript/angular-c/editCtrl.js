angular.module("blog")
.controller("editCtrl", function ($scope, $stateParams, postSrvc) {

    $scope.post = {};

    $scope.validatePost = function() {
        if (postSrvc.validatePost($scope.post)) {
            postSrvc.updatePost($scope.post).then(function(response) {
                console.log(response + "\n" + $scope.post)
            })
        }
    };

    function getPostById() {
        postSrvc.getPostById($stateParams.postId).then(function (response) {
            $scope.post = response;
        })
    }

    getPostById();

});