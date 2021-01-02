const express = require('express')
const app = express()
const jwt = require('express-jwt')
// const jwtAuthz = require('express-jwt-authz');
const jwks = require('jwks-rsa')

/* Authorization middleware. When used, the
Access Token must exist and be verified against
the Auth0 JSON Web Key Set */
const checkJwt = jwt({
    /*  Dynamically provide a signing key
    based on the kid in the header and
    the signing keys provided by the JWKS endpoint. */
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-49ka9ni6.eu.auth0.com/.well-known/jwks.json'
    }),
    aud: 'localhost:5000',
    issuer: 'https://dev-49ka9ni6.eu.auth0.com/',
    algorithms: ['RS256']
})

// todo: put jwksUri etc in .env

module.exports = checkJwt
