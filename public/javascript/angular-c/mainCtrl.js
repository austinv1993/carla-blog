angular.module('blog')
.controller('mainCtrl', function($scope, postService) {

    getPosts();

    function getPosts() {
        postService.getPosts().then(function (posts) {
            $scope.posts = posts;
        })
    };

    $scope.posts = [];

    $scope.createPost = function(post) {
        postService.createPost(post).then(function() {
            console.log('Post created.')
        })
    };
});