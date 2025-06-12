const BlogPost = require("../model/blogpost.schema");

async function getBlogPost(req , res){
    try{
        const posts = await BlogPost.find();
        if(!posts)
            return res.status(200).send("No blogs right now")
        return res.status(200).json({posts});
    } catch(e){
        console.error(e.message);
        return res.status(400).json({status: "An error occured. " , error: e.message});
    };
};

module.exports = getBlogPost;