global.Promise = require('es6-promise').Promise;

var dontDelete = false;

var
    hydra = require('hydra-core'),
    jsonldp = require('jsonld').promises(),
    uriTemplates = require('uri-templates');

var config = {
    base: 'http://localhost:3000',
    user: 'hydracore',
    email: 'hydracore@test.com',
    password: '123456'
};

var ns = {
    Manifest: 'http://iiif.io/api/presentation/2#Manifest'
};


var entryPointContext = {
    '@context': {
        '@vocab': ns.EntryPoint + '/'
    }
};

var manifestNode = {
    '@type': ns.Manifest,
    node: 'edition/0097'
};

Promise.resolve()
    .then(function () {
        return hydra.loadDocument(config.base)
            .then(function (document) {
                var graphs = document.findOperation(ns.Manifest, 'GET').invoke;
                var manifest = document.api.findClass(ns.Manifest);
                var template = uriTemplates(manifest.template);
                var uri1 = template.fill({node : manifestNode.node});
                return graphs(uri1)
                    .then(function (response) {
                        out = JSON.stringify(response, null, 2);
                        console.log(out);
                    })
            });
    })
    .then(function () {
        return Promise.resolve();
    })
    .catch(function (error) {
        console.error(error.stack);
    });