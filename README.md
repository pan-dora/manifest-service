## IIIF Manifest Service

* This service returns a specification conformant JSON-LD IIIF Manifest from an API request.
* The base code is a fork of Colin Maudry's [SPARQL-Router](https://github.com/ColinMaudry/sparql-router)  
    
### Manifest SPARQL CONSTRUCT query    
* The query request is a parameterized API call 
 * (e.g. `http://service.b-ol.de/api/graphs/manifest.nt?$node=<http://localhost:8080/fcrepo/rest/collection/test10/001/manifest>`)
* The service routes the template parameter to a datasource with a matching query template.
 * template options: [manifest, list, range]
* Only one `<resource>` value is allowed for the SPARQL CONSTRUCT query.
* The service then with an XHR calls the configured SPARQL endpoint.

### N-Triples Response Transformation
* The endpoint response returns N-triples that are transformed by the service in a multi-step process:

1. [serialize-rdf-as-json-ld](https://www.w3.org/TR/json-ld-api/#serialize-rdf-as-json-ld-algorithm)
2. [frame json-ld](http://json-ld.org/spec/latest/json-ld-framing/) 
3. [graph normalization]() 

The normalization involves replacing certain @type properties with inline @context, and appending serialization document metadata.

* The serialized JSON-LD output response should conform exactly to the IIIF standard that dictates the expectations of the client viewer. [typical manifest example](https://github.com/blumenbach/iiif-manifest-service/blob/master/example/iiif-manifest-typ.json)
  
### All Objects in IIIF Manifest   
  <img src="https://github.com/blumenbach/iiif-manifest-service/blob/master/spec/objects-all.png"alt="" />