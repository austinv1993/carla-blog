var mongoose = require('mongoose');


var BlogPost = new mongoose.Schema({
    title: {type: String, required: true},
    summary: {type: String, required: true},
    body: {type: String, required: true},
    creationDate: {type: String, required: true, default: new Date()},
    imageUrl: String
})

module.exports = mongoose.model('BlogPost', BlogPost)