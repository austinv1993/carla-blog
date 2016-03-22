var BlogPost = require('../models/BlogPost.js')
module.exports = {
    newBlogPost: function(req, res) {
        new BlogPost(req.body).save(function(err, post) {
            if(err) {
                res.send(err);
            } else {
                res.send(post);
            }
        })
    },
    getBlogPosts: function(req, res) {
        BlogPost.find({}).exec(function (err, posts) {
            res.send(posts);
        }) 
    }
}