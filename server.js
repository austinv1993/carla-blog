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
// ,   UserControl = require('./controllers/UserControl.js')
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

//POST
app.get('/api/posts', PostControl.getAll);
app.get('/api/posts/:postId', PostControl.getById);
app.post('/api/posts', PostControl.create);
app.put('/api/posts', PostControl.update);
app.delete('/api/posts/:postId', PostControl.remove);

app.listen(port, function() {
	console.log("Listening on port:", port);
});
mongoose.connect(mongooseURI);

mongoose.connection.once('open', function(){
	console.log("Connected to MLab at " + mongooseURI);
})
