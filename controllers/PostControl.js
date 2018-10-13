var Post = require('../models/Post.js')
module.exports = {
    create: function(req, res) {
        new Post(req.body).save(function(err, post) {
            if(err) {
                res.send(err);
                console.log(err);
            } else {
               res.send(post);
            }
        })
    },
    getAll: function(req, res) {
        Post.find({}).exec(function (err, posts) {
            if(err){
                res.send(err)
            } else {
                res.send(posts);
            }
        }) 
    },
    getById: function (req, res) {
        Post.findById(req.params.postId, function (err, post) {
            if (err) {
                res.send(err);
            } else {
                res.send(post);
            }
        })
    },
    update: function(req, res) {
        Post.findByIdAndUpdate(req.body._id, {title: req.body.title, body: req.body.body}, function(err, post) {
            if (err) {
                res.send(err);
            } else {
                res.send(post);
            }
        })
    }
};