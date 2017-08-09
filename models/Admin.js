var mongoose = require('mongoose')

var Admin = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    
})
module.exports = mongoose.model('Admin', Admin)