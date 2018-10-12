angular.module('blog')
.service('post', function($http) {

    this.createPost = function(post) {
        return $http.post('http://localhost:3000/api/create/posts', post)
            .then(function(response) {
                return response;
            })
    };

    this.getPosts = function() {
        return $http.get('http://localhost:3000/api/get/posts')
            .then(function(response) {
                return response.data;
            })
    };

});