angular.module('blog')
.controller('mainCtrl', function($scope, $state, postSrvc) {

    $scope.posts = [];

    $scope.createPost = function() {
        $state.go("create");
    };

    $scope.editPost = function(postId) {
        $state.go("edit", {postId: postId});
    };

    getPosts();

    function getPosts() {
        postSrvc.getAll().then(function (posts) {
            $scope.posts = posts;
        })
    }

});