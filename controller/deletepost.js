const BlogPost = require("../model/blogpost.schema");

async function deleteBlogPost(req , res){
    try{
        const {id} = req.params;
        const deletedpost = await BlogPost.findOneAndDelete(id);

        if(!deletedpost)
            return res.status(400).json({status: "failed in deleting the blog-post."});
        res.status(200).json({status: "success , post deleted."});
    } catch(e){
        console.error(e.message);
        return res.status(400).json({status: "An error occured. " , error: e.message});
    };
};

module.exports = deleteBlogPost;