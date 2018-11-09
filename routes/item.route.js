const express = require('express');
const router = express.Router();

const item_controller = require('../controllers/item.controller');

// Route to create an item
router.post('/create', item_controller.item_create);
// Route to select * items
router.get('/all', item_controller.items_details);
// Route to select an item with his ID
router.get('/:id', item_controller.item_details);
// Route to update an item with his ID 
router.put('/:id/update', item_controller.item_update);
// Route to delete an item with his ID 
router.delete('/:id/delete', item_controller.item_delete);




router.get('/test', item_controller.test);
module.exports = router;