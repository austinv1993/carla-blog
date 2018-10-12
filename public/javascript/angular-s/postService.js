angular.module('blog')
.service('postService', function($http) {
    this.createPost = function(post) {
        return $http.post('http://localhost:3000/srvr/post', post)
            .then(function(response) {
                console.log('This is the reponse from postService.createPost', response.data)
            })
    };
    this.getPosts = function() {
        return $http.get('http://localhost:3000/api/get')
            .then(function(response) {
                return response.data;
            })
    };
});