const express = require('express');
const postController = require('../controllers/postController');

const router = express.Router();

router.get('/all', postController.fetch_all_posts);

router.post('/', postController.add_post);

router.put('/', postController.change_post);

router.delete('/:id', postController.delete_post);

module.exports = router;
