const BlogPost = require("../model/blogpost.schema");

async function updateBlogPost(req, res) {
  try {
    const { id } = req.params;
    const { title, description, author } = req.body;

    const updatedPost = await BlogPost.findByIdAndUpdate(
      id,
      { title, description, author },
      { new: true, runValidators: true }
    );

    if (!updatedPost) {
      return res
        .status(404)
        .json({ status: "fail", message: "Post not found" });
    }

    res.status(200).json({
      status: "success",
      data: updatedPost,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  };
};

module.exports = updateBlogPost;