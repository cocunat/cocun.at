var express = require('express');
var router = express.Router();
var Country = require('../models/country');

router.get('/:country/', function(req, res, next) {

	Country.find({ code: req.params.country }, '-_id -__v', function(err, country) {
	  if (err) throw err;

	  // object of the user
	  console.log(country);
		res.json(country);
	});

});

module.exports = router;
