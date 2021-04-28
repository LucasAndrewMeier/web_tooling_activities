var express = require('express');
var data = require('../datastore/activity.json');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {


    //ASSIGN THE DATA FROM THE EXTERNAL API TO MY thisObject BELOW


   /*var thisObject = {
       name: "Colin",
       institution: "Dunwoody College of Technology"
   }*/
    res.render(data);
});

module.exports = router;
