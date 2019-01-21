var express = require('express');
var db = require("../models");
var router = express.Router();

router.get('/', function(req, res) {
  db.burger.findAll({}).then(function (data) {
      var hbsObject =  {
          burgers: data
      };
      res.render("index", hbsObject);
  })
});

router.post('/burgers', function(req, res) {
  db.burger.create({
      burger_name: req.body.burger_name
  }).then(function (data) {
      console.log(data);
      res.send();
  })
});

router.put('/burgers/:id', function(req, res) {
    var id = req.params.id;
    db.burger.update({
        devoured: req.body.devoured
    }, {
        where: {
            id: id
        }
    }).then(function (data) {
        console.log(data);
        res.send();
    })
});

module.exports = router;
