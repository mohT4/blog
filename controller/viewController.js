const Blogs = require('../models/blogs');

exports.getOverView = async (req, res) => {
  try {
    const blogs = await Blogs.find();
    res.status(200).render('index', {
      title: 'All Blogs',
      blogs,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getBlogs = async (req, res) => {
  try {
    const blog = await Blogs.findOne({ slug: req.params.slug });
    res.status(200).render(blog, {
      title: `${blog.title}`,
      blog,
    });
  } catch (err) {
    console.log(err);
  }
};
