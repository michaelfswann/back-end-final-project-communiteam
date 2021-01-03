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
        jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
    }),

    // THE AUD SHOULD BE AUDIENCE: 'LOCALHOST:5000'
    /////////////<---VERY SUSPICIOUS!!!!

    audience: process.env.AUTH0_AUDIENCE,
    issuer: `https://${process.env.AUTH0_DOMAIN}/`,
    algorithms: ['RS256']
})

// todo: put jwksUri etc in .env

module.exports = checkJwt
