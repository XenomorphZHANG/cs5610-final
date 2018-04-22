
// Get the dependencies
const express = require('express');

// parse info when receive
// parse JSON file from HTTP response
const bodyParser = require('body-parser');
const app = express();

const path = require('path');
const http = require('http');

// loading authentication modules
const passport      = require('passport');
const cookieParser  = require('cookie-parser');
const session       = require('express-session');

app.use(session({
  secret: 'this is the secret',
  resave: true,
  saveUninitialized: true
}));

app.use(cookieParser());

// passport.initialize middleware is invoked on every request.
// It ensures the session contains a passport.user object, which may be empty.
app.use(passport.initialize());

// passport.session middleware is a Passport Strategy which will load the user object onto req.
// user if a serialised user object was found in the server.
app.use(passport.session());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Point static path to dist -- For building -- REMOVE
// enclose these directories to be public
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'src/assets')));

// CORS
app.use(function(req, res, next) {

  // allow multiple client domain here
  var allowedOrigins = ['http://localhost:4200', 'https://cs5610-final-yyj.herokuapp.com'];
  var origin = req.headers.origin;
  if (allowedOrigins.indexOf(origin) > -1) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  // res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

const port = process.env.PORT || '3100';
app.set('port', port);

// Create HTTP server
const server = http.createServer(app);

//var serverSide = require("./server/test-mongodb/app");
//serverSide(app);

// var hello = require('./hello');
// hello(app);
// or require('./hello')(app);

require("./server/app")(app);

// For Build: Catch all other routes and return the index file -- BUILDING
app.get('*', function (req, res) {
  // res.sendFile(path.join(__dirname, 'dist/index.html'));
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

server.listen( port , function() {
  console.log('Node app is running on port', app.get('port'))
});
