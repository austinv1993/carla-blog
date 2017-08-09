var express = require('express')
,	cors = require('cors')
,	mongoose = require('mongoose')
,	bodyParser = require('body-parser')
,	port = 3000
,	secret = require('./secret.js')
,	mongooseURI = secret.mongooseURI
,	passport = require('passport')
,	session = require('express-session')
,	needle = require('needle')
,   PostControl = require('./controllers/PostControl.js')
,   AdminControl = require('./controllers/AdminControl.js')
,	Post = require('./models/Post.js')
,	app = express();

app.use(bodyParser.json());
app.use(cors())
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/public'));

//POSTS
app.post('/api/create-post', PostControl.newPost);
app.get('/api/get-posts', PostControl.getPosts);

//ADMIN
app.post('/api/create-admin', AdminControl.createAdmin);



app.listen(port, function() {
	console.log("Listening on port:", port);
});
mongoose.connect(mongooseURI);

var conn = mongoose.connection;

conn.once('open', function(){
	console.log("Connected to MLab at " + mongooseURI);
})
