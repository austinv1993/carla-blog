angular.module('blog')
.service('postSrvc', function($http) {

    this.getPosts = function() {
        return $http.get('http://localhost:3000/api/get/posts')
            .then(function(response) {
                return response.data;
            })
    };

    this.getPostById = function(postId) {
        return $http.get('http://localhost:3000/api/get/posts/' + postId)
            .then(function(response) {
                return response.data;
            })
    };

    this.createPost = function(post) {
        return $http.post('http://localhost:3000/api/create/posts', post)
            .then(function(response) {
                return response;
            })
    };

    this.updatePost = function(post) {
        return $http.put('http://localhost:3000/api/update/posts', post)
            .then(function(response) {
                return response;
            })
    };

    this.validate = function (post) {
        if(!post.title || post.title === "") {
            console.log("Post title required");
            return false;
        }
        if(!post.body || post.body === "") {
            console.log("Post body required");
            return false;
        }
        return true;
    };

});