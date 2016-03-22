angular.module('app')
.controller('mainCtrl', function($scope, postService) {
    $scope.test = 'working';
    $scope.newBlogPost = function(post) {
        postService.newBlogPost(post)
            .then(function() {
                console.log('Post created.')
            })
    }
    $scope.showForm = true;
    $scope.toggleForm = function() {
        if($scope.showForm) {
            $scope.showForm = false;
        } else{
            $scope.showForm = true;
        }
    }
    
})