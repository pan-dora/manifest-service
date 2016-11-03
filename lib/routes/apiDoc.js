var express = require('express');
var functions = require('./../functions');

var apiDoc = express.Router();

apiDoc.route('/')
	  .get(function(request,response,next) {
			if (!request.headers.accept || request.headers.accept.indexOf("application/json") > -1) {
			    response.sendFile('/public/api/swagger.json',{root: request.appRoot});
		  }
	  	else if (request.headers.accept.indexOf("application/ld+json") > -1) {
			response.sendFile('/public/api/hydra.json',{root: request.appRoot});
		    response.set('Content-Type','application/ld+json');
		  } else {
		    	next();
		  }
	    })
	    .post(function(request,response) {
	      if (request.get('Content-Type') === "application/coffee-pot-command") {
	        response.sendStatus(418).end();
	      } else {
	        response.sendStatus(405).end();
	      }
	    }
	);

module.exports = apiDoc;
