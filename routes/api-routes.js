'use strict';

var geoCode = require('./../models/googleDirections.js');

module.exports = function(app) {

	//for the initial pass of arguments, start and end waypoints to addresses
	app.put('/api/passAddress', function(req, res) {
		//this is calling it you can check the console.
		var start = geoCode(req.body.start, function(results, status){
			console.log(results);
			var geoStartAddress = results;
			var start = geoCode(req.body.end, function(results, status){
				console.log(results);
				var geoEndAddress = results;
				//return(geoStartAddress);
				res.json([geoStartAddress, geoEndAddress]);
			});
		});
	})
}
