"use strict";

// requires
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require('morgan'); // for debugging
var app = express();
var Article = require('./models/Article.js');
var router = require('./controllers/controller.js');
var port = process.env.PORT || 3000;

// initialize express
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: false
}));

// Serve up the public static content folder with express
app.use(express.static(process.cwd() + '/public'));

// fire up mongo DB 
if(process.env.NODE_ENV == 'production'){
    // insert the handler for the deployed mongodb one I have it set up in heroku
    // this is for way laaater, frickin' heck! 
}
else{
    mongoose.connect('mongodb://localhost/nytreact');
}

// create db object
var db = mongoose.connection;

// log out a success message when the db connects
db.once('open', function() {
    console.log('Connected to mongodb!');
});

// import the routes 
app.use('/', router);

// log a success message when the server starts 
app.listen(port, function(){
    console.log('Server is up, now running on port: ' + port);
});