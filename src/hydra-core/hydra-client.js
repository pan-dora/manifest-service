global.Promise = require('es6-promise').Promise;


/**
 * !!! change this to true if you want to keep the created objects !!!
 */
var dontDelete = false;


var
    hydra = require('../'),
    jsonldp = require('jsonld').promises();

var config = {
    base: 'http://localhost:3000',
    user: 'hydracore',
    email: 'hydracore@test.com',
    password: '123456'
};

var ns = {
    graphs: 'http://service.b-ol.de/api/hydra.json#EntryPoint/api/graphs'
};

Promise.resolve()
    .then(function () {
        return hydra.loadDocument(config.base)
            .then(function (document) {
                var graphs = document.findOperation(ns.graphs, 'GET').invoke;
                return graphs()
                    .then(function (response) {
                        return jsonldp.compact(response, {'@vocab': 'http://www.w3.org/ns/hydra/core#'});
                    })
                    .then(function (response) {
                        graphs = response;
                        console.log(graphs);
                    })
            });
    })
    .then(function () {
        return Promise.resolve();
    })
    .catch(function (error) {
        console.error(error.stack);
    });
