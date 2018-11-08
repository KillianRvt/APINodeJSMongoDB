const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user.controller');

// Route to create a user
router.post('/create', user_controller.user_create);
// Route to select * users
router.get('/all', user_controller.users_details);
// Route to select a user with his ID
router.get('/:id', user_controller.user_details);
// Route to update a user with his ID 
router.put('/:id/update', user_controller.user_update);
// Route to delete a user with his ID 
router.delete('/:id/delete', user_controller.user_delete);




router.get('/test', user_controller.test);
module.exports = router;