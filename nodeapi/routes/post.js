const express = require('express');
const postController = require('../controllers/post');
const router = express.Router();
router.get('/', postController.getPosts);
// exports.getPosts = (req, res) => {
//  res.send("Hello world from node js test5");
// };

module.exports = router;
