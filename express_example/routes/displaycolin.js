var express = require('express');
var data = require('../datastore/activity.json');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

   
    res.render('displaycolin', data);
});

module.exports = router;
