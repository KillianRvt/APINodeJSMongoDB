const express = require('express');
const bodyParser = require('body-parser');
// initialize our express app
const app = express();

const user = require('./routes/user.route'); 

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://apinodejs:cool12password@ds255463.mlab.com:55463/apinodejs';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, "Can't connect to database !"));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/users', user);


let port = 3005;



app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});

