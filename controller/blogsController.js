const Blogs = require('../models/blogs');

exports.createBlog = async (req, res, next) => {
  try {
    const { title, body } = req.body;
    const blog = await Blogs.create(title, body);

    res.status(200).json({
      status: 'success',
      data: {
        blog: blog,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getAllBlogs = async (req, res, next) => {
  try {
    const blogs = await Blogs.find();
    res.status(200).json({
      status: 'success',
      data: {
        results: blogs.length,
        blogs: blogs,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getBlogs = async (req, res, next) => {
  try {
    const blog = await Blogs.findById(req.params.id);
  } catch (err) {
    console.log(err);
  }
};
