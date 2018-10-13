angular.module('blog')
.service('postSrvc', function($http) {

    this.getAll = function() {
        return $http.get('http://localhost:3000/api/get/posts')
            .then(function(response) {
                return response.data;
            })
    };

    this.getById = function(postId) {
        return $http.get('http://localhost:3000/api/get/posts/' + postId)
            .then(function(response) {
                return response.data;
            })
    };

    this.create = function(post) {
        return $http.post('http://localhost:3000/api/create/posts', post)
            .then(function(response) {
                return response;
            })
    };

    this.update = function(post) {
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