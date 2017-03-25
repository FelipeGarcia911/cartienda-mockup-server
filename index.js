// Load Libraries
// -------------------------------------------------------------------------------------------------------------------

var bodyParser      = require('body-parser');
var methodOverride  = require("method-override");
var path            = require('path');

var express = require('express');
var app     = express();
var http    = require('http').Server(app);
// -------------------------------------------------------------------------------------------------------------------

// Variables
// -------------------------------------------------------------------------------------------------------------------
var port    = process.env.PORT || 3000;
var main_route = __dirname + '/public/web/';
// -------------------------------------------------------------------------------------------------------------------

// App Configurations
// -------------------------------------------------------------------------------------------------------------------
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/images', express.static(__dirname + '/public/web/images'));
app.use('/css', express.static(__dirname + '/public/web/css'));
app.use('/js', express.static(__dirname + '/public/web/js'));
app.use(bodyParser.json());
app.use(methodOverride());
// -------------------------------------------------------------------------------------------------------------------

// Template Route
// -------------------------------------------------------------------------------------------------------------------
var router = express.Router();
router.get('/', function(req, res) {
    res.sendFile(main_route + 'index.html');
});
app.use(router);
// -------------------------------------------------------------------------------------------------------------------

// Index - Route
// -------------------------------------------------------------------------------------------------------------------
var api_router = require('./app/routers/ApiRouter')(express, path);
app.use('/api', api_router);

var cartienda_service = require('./app/routers/CartiendaServiceRouter')(express, path);
app.use('/cartienda_service/api', cartienda_service);
// -------------------------------------------------------------------------------------------------------------------

// Start server
// -------------------------------------------------------------------------------------------------------------------
http.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
//----------------------------------------------------------------------------------------------------------------