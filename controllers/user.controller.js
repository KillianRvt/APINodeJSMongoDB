const User = require('../models/user.model');

// Create a 'users' array for the select * query
let users = [];

exports.user_create = function (req, res) {
    let user = new User(
        {
            name: req.body.name,
            password: req.body.password
        }
    );

    user.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('User Created successfully')
    })
};

// Select a user with ID
exports.user_details = function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) return next(err);
        res.send(user);
    })
};

// Select * users
exports.users_details = function (req, res) {
    User.find(function (err, users) {
        if (err) return next(err);
        res.send(users);
    })
};


// Update a user with ID
exports.user_update = function (req, res) {
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
        if (err) return next(err);
        res.send('User udpated successfully.');
    });
};


// Delete a user with ID 
exports.user_delete = function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('User deleted successfully!');
    })
};


exports.test = function (req, res) {
    res.send('Hello Controller');
};