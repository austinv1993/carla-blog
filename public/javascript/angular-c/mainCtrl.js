angular.module('blog')
.controller('mainCtrl', function($scope, post) {

    $scope.posts = [];

    getPosts();

    function getPosts() {
        post.getPosts().then(function (posts) {
            $scope.posts = posts;
        })
    }

});