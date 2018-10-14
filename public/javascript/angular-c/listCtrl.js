angular.module('blog')
.controller('listCtrl', function($scope, $state, postSrvc) {

    $scope.posts = [];
    $scope.search = "";

    $scope.createPost = function() {
        $state.go("create");
    };

    $scope.editPost = function(postId) {
        $state.go("edit", {postId: postId});
    };

    $scope.mainView = function() {
        $state.go("main");
    };

    getPosts();

    function getPosts() {
        postSrvc.getAll().then(function (posts) {
            $scope.posts = posts;
        })
    }

});