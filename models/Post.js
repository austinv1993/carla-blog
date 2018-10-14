var mongoose = require('mongoose');


var Post = new mongoose.Schema({
    title: {type: String, required: true},
    body: {type: String, required: true},
    dateCreated: {type: String, required: true},
    dateLastModified: {type: String, required: true},
    imageUrl: String
})

module.exports = mongoose.model('Post', Post)