var Admin = require('../models/Admin.js')

module.exports = {
    createAdmin: function(req, res) {
        new Admin(req.body).save(function(err, admin) {
            if (err) {
                res.send(err);
            } else {
                res.send(admin)
            }
        })
    }
}