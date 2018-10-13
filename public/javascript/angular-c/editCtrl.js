angular.module("blog")
.controller("editCtrl", function ($scope, $stateParams, postSrvc) {

    $scope.post = {};

    $scope.updatePost = function() {
        if (postSrvc.validate($scope.post)) {
            postSrvc.update($scope.post).then(function(response) {
                console.log(response + "\n" + $scope.post)
            })
        }
    };

    function getPostById() {
        postSrvc.getById($stateParams.postId).then(function (response) {
            $scope.post = response;
        })
    }

    getPostById();

});