module.exports = function (app){
  require("./services/user.service.server")(app);
  require("./services/rst.service.server")(app);
  require("./services/faq.service.server")(app);
  require("./services/blog.service.server")(app);
  require("./services/review.service.server")(app);

  var db = require("./models/models.server");
};
