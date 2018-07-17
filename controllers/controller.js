"use strict";
// requires
var express = require('express');
var router = express.Router();
var Article = require('../models/Article.js');

// base path - show the application via public index.html/react
router.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/public/index.html");
});

// get for saved articles
router.get("/api/saved", function(req, res) {
  // query the database for any saved articles using the find() function imported from the article model
  // handle errors
});

// post to save an article
router.post("/api/saved", function(req, res) {
  // create a new "entry" calling req.body
  // save "entry" to the database
  // handle errors
});

// delete to remove an article
router.post("/api/delete/:articleMongoId", function(req, res) {
});

// wildcard route for any undefined paths, just send back to home page
// not going to do a 404 for this one because the assignment is overdue (time constraint) and
// it's a single-page app (don't reeeeeally need one if there is a / redirect)
router.get("*", function(req, res) {
  res.redirect("/");
});

// export the router
module.exports = router;