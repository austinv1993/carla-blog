angular.module('blog')
.controller('listCtrl', function($scope, $state, postSrvc) {

    $scope.search = "";
    $scope.posts = [];
    $scope.displayedPosts = [];
    getPosts();

    $scope.displayAmount = 5;
    var postCount = 0;
    var startIndex = 0;
    var endIndex = 0;
    $scope.displayedPosts = [];

    $scope.hasMore = false;
    $scope.hasLess = false;

    $scope.createPost = function() {
        $state.go("create");
    };

    $scope.editPost = function(postId) {
        $state.go("edit", {postId: postId});
    };

    $scope.mainView = function() {
        $state.go("main");
    };

    $scope.paginate = function (goForward) {
        if (goForward) {
            startIndex = endIndex;
            endIndex = (endIndex + $scope.displayAmount) < postCount ? (endIndex + $scope.displayAmount) : postCount;
            $scope.displayedPosts = $scope.posts.slice(startIndex, endIndex);
            $scope.hasMore = endIndex < postCount;
            $scope.hasLess = true;
        } else {
            startIndex = (startIndex - $scope.displayAmount) < 0 ? 0 : startIndex - $scope.displayAmount;
            endIndex = (startIndex + $scope.displayAmount) < postCount ? (startIndex + $scope.displayAmount) : postCount;
            $scope.displayedPosts = $scope.posts.slice(startIndex, endIndex);
            $scope.hasMore = true;
            $scope.hasLess = startIndex > 0;
        }
        enableButtons();
    };

    function getPosts() {
        postSrvc.getAll().then(function (posts) {
            $scope.posts = posts;
            postCount = $scope.posts.length;
            endIndex = $scope.displayAmount < postCount ? $scope.displayAmount : postCount;
            $scope.displayedPosts = $scope.posts.slice(startIndex, endIndex);
            $scope.hasMore = $scope.displayAmount < postCount;
            enableButtons();
        })
    }

    function enableButtons() {
        document.getElementById("Previous").disabled = !$scope.hasLess;
        document.getElementById("Next").disabled = !$scope.hasMore;
    }

});