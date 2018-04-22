var mongoose = require("mongoose");

var BlogSchema = require("./blog.schema.server");
var blogModel = mongoose.model('blogModel', BlogSchema);

var userModel = require("../user/user.model.server");

blogModel.createBlog = createBlog;
blogModel.findAllBlog = findAllBlog;
blogModel.findBlogByUser = findBlogByUser;
blogModel.findBlogById = findBlogById;
blogModel.updateBlog = updateBlog;
blogModel.addReview = addReview;
blogModel.deleteBlog = deleteBlog;

module.exports = blogModel;

function createBlog(userId, blog) {
  blog._user = userId;
  return blogModel.create(blog)
    .then(function(responseBlog) {
      userModel.findUserById(responseBlog._user)
        .then(function(user) {
          user.blogs.push(responseBlog);
          return user.save();
        });
      return responseBlog;
    });
}

function findAllBlog() {
  return blogModel.find();
}

function findBlogByUser(userId) {
  return blogModel.find({_user: userId})
    .populate('_user')
    .exec();
}

function findBlogById(blogId) {
  return blogModel.findById(blogId);
}

function updateBlog(blogId, blog) {
  return blogModel.update({_id: blogId}, blog);
}

function addReview(blogId, contents) {
  return blogModel.findBlogById(blogId).then(function (blog) {
    blog.reviews.push(contents);
    return blog.save();
  })
}

function deleteBlog(blogId) {
  blogModel.findById(blogId)
    .then(function(blog) {
      userModel.findUserById(blog._user)
        .then(function(user) {
          user.blogs.pull({_id: blogId});
          user.save();
        });
    });
  return blogModel.deleteOne({_id: blogId});
}
