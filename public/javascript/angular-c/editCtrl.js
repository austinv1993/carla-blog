angular.module("blog")
.controller("editCtrl", function ($scope, $state, $stateParams, postSrvc) {

    $scope.post = {};

    $scope.updatePost = function() {
        if (postSrvc.validate($scope.post)) {
            postSrvc.update($scope.post).then(function(response) {
                console.log(response);
                $state.go('main');
            })
        }
    };

    $scope.deletePost = function(postId) {
        postSrvc.remove(postId).then(function (response) {
            console.log(response);
            $state.go('main');
        })
    };

    $scope.cancel = function() {
        $state.go('main');
    };

    function getPostById() {
        postSrvc.getById($stateParams.postId).then(function (response) {
            $scope.post = response;
        })
    }

    getPostById();

});