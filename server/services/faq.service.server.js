module.exports = function (app) {

  var faqModel = require("../models/faq/faq.model.server");
  //Post calls
  app.post('/api/user/:userId/faq', createFaq);
  app.post('/api/faq/:faqId', addFollowUp);
  //Get calls
  app.get('/api/faq/:faqId', findFaqById);
  app.get('/api/faq', findAllFaqs);
  //Put calls
  app.put('/api/faq/:faqId',updateFaq);
  //Delete calls
  app.delete('/api/faq/:faqId', deleteFaq);


  function createFaq(req, res) {
    var userId = req.param['userId'];
    var faq = req.body;
    console.log("it is here");
    faqModel.createFaq(userId, faq)
      .then(function(result){
        console.log("create faq:  " + result);
        res.send(result);
      });
  }

  function addFollowUp(req, res) {
    var faqId = req.params['faqId'];
    var content = req.body;
    // console.log('this is content:' + content.content);
    faqModel.addFollowUp(faqId, content.content).then(
      function(faq) {
        res.json(faq);
      },
      function(err) {
        res.status(400).send(err);
      }
    );
  }

  function findAllFaqs(req, res) {
    faqModel.findAllFaqs().then(
      function(faqs) {
        res.json(faqs);
      },
      function(err) {
        res.status(400).send(err);
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

  function findFaqById(req, res) {
    // var faqId = req.params['faqId'];
    var faqId = req.params.faqId;
    faqModel.findFaqById(faqId).then(function(faq) {
      res.json(faq);
    })
  }

  function updateFaq(req, res) {
    var faqId = req.params['faqId'];
    var faq = req.body;

    faqModel.updateFaq(faqId,faq).then(function(status) {
      if(faq) {
        res.json(status);
      } else {
        res.status(404).send('Not find!');
      }
    });
  }

  function deleteFaq(req, res) {
    var faqId = req.params['faqId'];
    faqModel.deleteFaq(faqId)
      .then(function() {
        res.sendStatus(200);
      }
  );
  }
};
