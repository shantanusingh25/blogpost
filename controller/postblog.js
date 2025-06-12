const BlogPost = require("./../model/blogpost.schema.js");

async function createBlogPost(req , res){
   try {
       const { title, description, author } = req.body;
       const newPost = await BlogPost.create({ title, description, author });
       res.status(201).json({
           status: "success",
           data: {
               post: newPost
           }
       });
   } catch (error) {
       res.status(400).json({
           status: "fail",
           message: error.message
       });
   };
};

module.exports = createBlogPost;