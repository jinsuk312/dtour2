// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var session  = require('express-session');


// configuration ===============================================================
// connect to our database


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());


// Static directory
app.use(express.static("public"));


// routes ======================================================================
require('./routes/api-routes.js')(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
//db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
//});
