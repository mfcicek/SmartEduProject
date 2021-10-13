const express = require('express');
const courseController = require('../controllers/categoryController');

const router = express.Router();

router.route('/').post(courseController.createCategory); // http://localhost:3000/categories

module.exports = router;
