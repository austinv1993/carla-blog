angular.module("blog")
.controller("createCtrl", function ($scope, post) {

    $scope.post = {};

    $scope.validatePost = function () {
      if(!$scope.post.title || $scope.post.title === "") {
          console.log("Post title required");
          return;
      }
      if(!$scope.post.body || $scope.post.body === "") {
          console.log("Post body required");
          return;
      }
      createPost();
    };

    function createPost() {
        post.createPost($scope.post).then(function(response) {
            console.log(response + "\n" + post)
        })
    }

});