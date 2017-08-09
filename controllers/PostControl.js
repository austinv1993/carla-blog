var Post = require('../models/Post.js')
module.exports = {
    newPost: function(req, res) {
        new Post(req.body).save(function(err, post) {
            if(err) {
                res.send(err);
                console.log(err);
            } else {
               res.send(post);
            }
        })
    },
    getPosts: function(req, res) {
        Post.find({}).exec(function (err, posts) {
            if(err){
                res.send(err)
            } else {
                res.send(posts);
            }
        }) 
    }
}