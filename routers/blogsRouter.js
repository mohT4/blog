const express = require('express');
const blogsController = require('../controller/blogsController');
const router = express.Router();

router.get('/', blogsController.getBlogs);

module.exports = router;
