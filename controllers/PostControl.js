var Post = require('../models/Post.js')
module.exports = {
    newBlogPost: function(req, res) {
        var post = new Post({
            title: "test2",
            summary: "test2",
            body: "test2"
        })
        post.save(function(err, post) {
            if(err) {
                res.send(err);
                console.log(err);
            } else {
               //res.send(post);
               console.log(post);
            }
        })
    },
    getBlogPosts: function(req, res) {
        Post.find({}).exec(function (err, posts) {
            res.send(posts);
        }) 
    }
}