var express = require('express');
var router = express.Router();
/**
 * GET users listing
 */
router.get('/', function(req, res){
	req.getConnection(function(err, connection){
		if(err) return next(err);

		connection.query('SELECT * FROM customer', function(err, rows){
			if(err) console.log('Error selecting: %s ', err);

			res.render('customers', {page_title: 'Customers - CMR', data: rows});
		});
	});
});


module.exports = router;