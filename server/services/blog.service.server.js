module.exports = function (app) {

  var blogModel = require("../models/blog/blog.model.server");

  var multer = require('multer');
  var upload = multer({ dest: __dirname+'/../../src/assets/uploads' });

  //Post calls
  app.post('/api/user/:userId/blog', createBlog);
  app.post ('/api/upload', upload.single('myFile'), uploadImage);
  app.post('/api/blog/:blogId/review', addReview);
  //Get calls
  app.get('/api/blog/:blogId', findBlogById);
  app.get('/api/blog', findAllBlog);
  //Put calls
  app.put('/api/blog/:blogId',updateBlog);
  //Delete calls
  app.delete('/api/blog/:blogId', deleteBlog);


  function createBlog(req, res) {
    var userId = req.param['userId'];
    var blog = req.body;
    blogModel.createBlog(userId, blog)
      .then(function(result){
        console.log("create blog: " + result);
        res.send(result);
      });
  }

  function findAllBlog(req, res) {
    blogModel.findAllBlog().then(
      function(blog) {
        res.json(blog);
      },
      function(err) {
        res.sendStatus(400).send(err);
      }
    )
  }
  // function findAllFaqsForUser(req, res) {
  //   var userId = req.params['userId'];
  //   FaqModel.findFaqByUser(userId).then(
  //     function (faq) {
  //       res.json(faq);
  //     },
  //     function (err) {
  //       res.sendStatus(400).send(err);
  //     });
  // }

  function findBlogById(req, res) {
    var blogId = req.params['blogId'];
    blogModel.findBlogById(blogId)
      .then(function(blog) {
      res.json(blog);
    })
  }

  function updateBlog(req, res) {
    var blogId = req.params['blogId'];
    var blog = req.body;

    blogModel.updateBlog(blogId, blog).then(function(blog) {
      if(blog) {
        res.status(200).send(blog);
      } else {
        res.status(404).send('Not find!');
      }
    });
  }

  function addReview(req, res) {
    var blogId = req.params['blogId'];
    var content = req.body;
    // console.log('this is content:' + content.content);
    blogModel.addReview(blogId, content.content).then(
      function(faq) {
        res.json(faq);
      },
      function(err) {
        res.status(400).send(err);
      }
    );
  }

  function deleteBlog(req, res) {
    var blogId = req.params['blogId'];
    blogModel.deleteBlog(blogId)
      .then(function() {
          res.sendStatus(200);
        }
      );
  }

  function uploadImage(req, res) {

    var blogId      = req.body.blogId;
    var width         = req.body.width;
    var myFile        = req.file;
    var userId = req.body.userId;

    var callbackUrl   = "https://cs5610-final-yyj.herokuapp.com/blog";

    if(myFile == null) {
      res.redirect(callbackUrl);
    }

    var originalname  = myFile.originalname; // file name on user's computer
    var filename      = myFile.filename;     // new file name in upload folder
    var path          = myFile.path;         // full path of uploaded file
    var destination   = myFile.destination;  // folder where file is saved to
    var size          = myFile.size;
    var mimetype      = myFile.mimetype;

    if (!blogId) {
      var tobeCreated = {_id: undefined, image_urls: ['/uploads/' + filename]};
      blogModel.createBlog(userId, tobeCreated)
        .then(function(blog) {
          res.redirect(callbackUrl);
        }, function(err) {
        });
    } else {
      blogModel.findBlogById(blogId)
        .then(function(foundBlog) {
          foundBlog.image_urls.push('/uploads/' + filename);
          blogModel.updateBlog(foundBlog._id, foundBlog)
            .then(function(status) {
              res.redirect(callbackUrl);
            }, function(err) {
            });
        });
    }

    res.redirect(callbackUrl);
  }

};
