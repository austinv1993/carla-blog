var express = require('express')
,	cors = require('cors')
,	mongoose = require('mongoose')
,	bodyParser = require('body-parser')
,	port = 3000
,	secret = require('./secret.js')
,	mongooseURI = secret.mongooseURI
,	passport = require('passport')
,	session = require('express-session')
,	flash = require('connect-flash')
,   PostControl = require('./controllers/PostControl.js')
,   AdminControl = require('./controllers/AdminControl.js')
,   UserControl = require('./controllers/UserControl.js')
,	app = express();

require('./config/passport')(passport);
app.use(session({ secret: 'secretsecret'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(bodyParser.json());
app.use(cors())
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/public'));

//PASSPORT AUTH
app.get('/login', UserControl.login);
app.post('/register', UserControl.register);

//POSTS
app.post('/api/post', PostControl.newPost);
app.get('/api/get', PostControl.getPosts);

//ADMIN
app.post('/api/create-admin', AdminControl.createAdmin);

app.listen(port, function() {
	console.log("Listening on port:", port);
});
mongoose.connect(mongooseURI);

mongoose.connection.once('open', function(){
	console.log("Connected to MLab at " + mongooseURI);
})
