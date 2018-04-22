
const yelp = require('yelp-fusion');
const apiKey = 'OnR09pM7Fjg06is4fE3q4CCiXz96G5j-LMpVxii78aWzRa_hgSEqTJOE1STY5BSlzItCiL4Qc1H6ONIyEb0XBRuJedt4vIqvArls2SnzZAoikgWbeMw9C5ddaUTNWnYx';

module.exports = function (app) {
  app.get("/api/rst/yelp/search", yelpSearch);
  app.post("/api/rst/yelp", createRstFromYelp);
  app.post("/api/rst/user/:userId", createRstForOwner);

  app.get("/api/rst", findAllRsts);
  app.get("/api/rst/:rstId", findRstById);
  app.get("/api/rst/yelp/:rstYelpId", findRstByYelpId);
  app.get("/api/rst/user/:userId", findRstsByUser);

  app.put("/api/rst/:rstId", updateRst);
  app.delete("/api/rst/:rstId", deleteRst);

  var rstModel = require("../models/rst/rst.model.server");

  function yelpSearch(req, res) {
    const searchRequest = {
      term: req.query["term"],
      latitude: req.query["latitude"],
      longitude: req.query["longitude"]
    };

    console.log(searchRequest);

    const client = yelp.client(apiKey);

    client.search(searchRequest).then(
      function (response) {
        const result = response.jsonBody.businesses;
        res.send(result);
      }, function (err) {
        res.status(400).send('yelp query failed');
      }
    )
  }

  // create restaurant for specific user (owner)
  function createRstForOwner(req, res) {
    var userId = req.params['userId'];
    var rst = req.body;
    rstModel.createRstForOwner(userId, rst)
      .then(function (rst) {
        res.json(rst);
      }, function(err) {
        res.status(500).json(err);
      });
  }

  // create restaurant from yelp api and the restaurant do not have a referenced _user
  function createRstFromYelp(req, res) {
    var rst = req.body;
    rstModel.createRstWithoutOwner(rst)
      .then(function (rst) {
        res.json(rst);
      }, function(err) {
        res.status(500).json(err);
      });
  }

  function findAllRsts(req, res) {
    rstModel.findAllRsts()
      .then(function(rsts) {
        res.json(rsts);
      }, function(err) {
        res.status(500).json(err);
      });
  }

  function findRstsByUser(req, res) {
    var userId = req.params["userId"];
    rstModel.findRstByUser(userId)
      .then(function(rsts) {
        res.json(rsts);
      }, function(err) {
        res.status(500).json(err);
      });
  }

  function findRstById(req, res) {
    var rstId = req.params['rstId'];
    rstModel.findRstById(rstId)
      .then(function(rst) {
        if (rst) {
          res.json(rst);
        } else {
          res.status(404);
          res.json(rst);
        }
      }, function(err) {
        res.status(500).json(err);
      });
  }

  function findRstByYelpId(req, res) {
    var rstId = req.params['rstYelpId'];
    rstModel.findRstByYelpId(rstId)
      .then(function(rst) {
        if (rst) {
          res.json(rst);
        } else {
          res.status(404);
          res.json(rst);
        }
      }, function(err) {
        res.status(500).json(err);
      });
  }

  function deleteRst(req, res) {
    var rstId = req.params['rstId'];
    rstModel.deleteRst(rstId)
      .then(function(status) {
        res.json(status);
      }, function(err) {
        res.status(500).json(err);
      });
  }

  function updateRst(req, res) {
    var rstId = req.params['rstId'];
    var rst = req.body;
    rstModel.updateRst(rstId, rst)
      .then(function(status) {
        res.json(status);
      }, function(err) {
        res.status(500).json(err);
      });
  }
};
