angular.module('blog')
.controller('mainCtrl', function($scope, $state, postSrvc) {

    $scope.post = {};
    $scope.posts = [];

    $scope.createPost = function() {
        $state.go("create");
    };

    $scope.editPost = function(postId) {
        $state.go("edit", {postId: postId});
    };

    $scope.listView = function() {
        $state.go("list");
    };

    getPosts();

    function getPosts() {
        postSrvc.getAll().then(function (posts) {
            $scope.posts = posts;
            $scope.post = posts[0];
        })
    }

});