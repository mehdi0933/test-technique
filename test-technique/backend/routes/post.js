const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const PostCtrl = require('../controllers/post');

router.get('/', auth, PostCtrl.getAllPost);
router.post('/', PostCtrl.createPost);
router.get('/:id',  PostCtrl.getOnePost);
router.put('/:id',  PostCtrl.modifyPost);
router.delete('/:id', PostCtrl.deletePost);

module.exports = router;