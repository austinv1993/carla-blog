angular.module('app')
.service('postService', function($http) {
    this.newBlogPost = function(post) {
        return $http.post('http://localhost:3000/srvr/post', post)
            .then(function(response) {
                console.log('This is the reponse from postService.newBlogPost', response.data)
            })
    };
    this.getBlogPosts = function() {
        return $http.get('http://localhost:3000/srvr/post')
            .then(function(response) {
                return response.data;
            })
    };
})