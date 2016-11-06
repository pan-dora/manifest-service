## IIIF Manifest Service

* This service returns a specification conformant JSON-LD IIIF Manifest from an API request.
* The base code is a fork of Colin Maudry's [SPARQL-Router](https://github.com/ColinMaudry/sparql-router)  
    
### Hydra Core Support
* A generic client implementing [hydra-core](https://github.com/christopher-johnson/hydra-core) can call the service entry
point (the base URL) with a application/ld+json request and get the hydra:apiDocumentation.
* A sample client implementation can be found [here](https://github.com/manifest-service/src/hydra-client/manifest-example.js)
* For a manifest response, the client simply asks for the class "http://iiif.io/api/presentation/2#Manifest" and defines the
{node} variable in an object that is then parsed into a hydra:IriTemplate by the server.

### N-Triples Response Transformation
* The endpoint response returns N-triples that are transformed by the service in a multi-step process:

1. [serialize-rdf-as-json-ld](https://www.w3.org/TR/json-ld-api/#serialize-rdf-as-json-ld-algorithm)
2. [frame json-ld](http://json-ld.org/spec/latest/json-ld-framing/) 

### All Objects in IIIF Manifest   
  <img src="https://github.com/blumenbach/iiif-manifest-service/blob/master/spec/objects-all.png"alt="" />