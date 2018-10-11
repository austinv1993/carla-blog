angular.module('blog')
.controller('mainCtrl', function($scope, postService) {
    $scope.posts = [];

    $scope.createPost = function(post) {
        postService.createPost(post)
            .then(function() {
                console.log('Post created.')
            })
    };

    function getPosts() {
        this.posts = postService.getBlogPosts();
        console.log(this.posts);
    };
    getPosts();
});