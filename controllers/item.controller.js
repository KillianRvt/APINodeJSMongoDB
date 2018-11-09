const Item = require('../models/item.model');

// Create a 'items' array for the select * query
let items = [];

exports.item_create = function (req, res) {
    let item = new Item(
        {
            label: req.body.label,
            image: req.body.image,
            description: req.body.description
        }
    );

    item.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Item Created successfully')
    })
};

// Select an item with ID
exports.item_details = function (req, res) {
    Item.findById(req.params.id, function (err, item) {
        if (err) return next(err);
        res.send(item);
    })
};

// Select * items
exports.items_details = function (req, res) {
    Item.find(function (err, items) {
        if (err) return next(err);
        res.send(items);
    })
};


// Update an item with ID
exports.item_update = function (req, res) {
    Item.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, item) {
        if (err) return next(err);
        res.send('Item udpated successfully.');
    });
};


// Delete a item with ID 
exports.item_delete = function (req, res) {
    Item.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Item deleted successfully!');
    })
};


exports.test = function (req, res) {
    res.send('Hello Controller');
};