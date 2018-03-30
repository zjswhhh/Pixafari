var express = require('express');
var todoControllers = require('./controllers/voteControllers');

var app = express();

//setting the view engine
app.set('view engine', 'ejs');

//enabling static content
app.use(express.static('./assets'));

//fire controllers
todoControllers(app);

//listening to the port
app.listen('2000');
console.log('listening to the port 2000');
