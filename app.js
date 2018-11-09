const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
// initialize our express app
const app = express();




const user = require('./routes/user.route'); 
const item = require('./routes/item.route'); 

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
app.use('/items', item);


let port = 3005;


//Middleware
app.use((req, res, next) => {
    fs.appendFileSync('./logReq.log', `[${new Date().toJSON().slice(0,10)} ${new Date().toJSON().slice(11,19)}] [${req.method}] ${req.originalUrl}\r\n`)
    next()
    });


app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});

