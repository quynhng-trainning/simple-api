let express = require("express");
let app = express();
let port = process.env.PORT || 3000;
let mongoose = require('mongoose');
let Task = require('./api/models/Task');
let bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/taskRoutes');
routes(app);

app.listen(port);

console.log('API is running with port ' + port);