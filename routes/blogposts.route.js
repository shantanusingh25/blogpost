const express = require("express");
const router = express.Router();
//controller fucntions
const createBlogPost = require("./../controller/postblog");  // controller fucntion to post a blog to db.

//routes
router.post("/" , createBlogPost);

module.exports = router;