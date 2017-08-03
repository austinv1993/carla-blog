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
,   BlogPostCtrl = require('./controllers/BlogPostCtrl.js')	
,	app = express();

app.use(bodyParser.json());
app.use(cors())
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/public'));

//BLOG POST
app.post('/srvr/post', BlogPostCtrl.newBlogPost);
app.get('/srvr/get', BlogPostCtrl.getBlogPosts);






app.listen(port, function() {
	console.log("Listening on port:", port);
});
mongoose.createConnection(mongooseURI);
mongoose.connection.once('openUri', function() {
	console.log("Connected to MongoDB at:", mongooseURI);
});
