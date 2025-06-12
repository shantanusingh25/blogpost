const express = require("express");
const router = express.Router();
//controller fucntions
const createBlogPost = require("./../controller/postblog");  // controller fucntion to post a blog to db.
const deleteBlogPost = require("../controller/deletepost");
const updateBlogPost = require("../controller/updatepost");

//routes
router.post("/" , createBlogPost);
router.delete("/:id" , deleteBlogPost);
router.put("/:id" , updateBlogPost);

module.exports = router;