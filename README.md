## IIIF Manifest Service

* This service returns a specification conformant JSON-LD IIIF Manifest from an API request.
* The base code is a fork of Colin Maudry's [SPARQL-Router](https://github.com/ColinMaudry/sparql-router)  
    
### Hydra Core Support
* A generic client implementing [hydra-core](https://www.npmjs.com/package/hydra-core) can simply call the service entry
point (the base URL) with a application/ld+json request and understand how to navigate the interface

### GET paramQuery    
* This request implements hydra:IriTemplate  
 * (e.g. `http://service.b-ol.de/api/graphs/{query}?$node={node}`)
* The service routes the query parameter to a datasource with a matching query template.
 * template options: [collection, manifest, list, listsearch, page, range]
* Only one `node` value is allowed for the SPARQL CONSTRUCT query.
* The service then with an XHR calls the configured SPARQL endpoint.

### N-Triples Response Transformation
* The endpoint response returns N-triples that are transformed by the service in a multi-step process:

1. [serialize-rdf-as-json-ld](https://www.w3.org/TR/json-ld-api/#serialize-rdf-as-json-ld-algorithm)
2. [frame json-ld](http://json-ld.org/spec/latest/json-ld-framing/) 

### All Objects in IIIF Manifest   
  <img src="https://github.com/blumenbach/iiif-manifest-service/blob/master/spec/objects-all.png"alt="" />