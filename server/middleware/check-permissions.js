const jwtAuthz = require('express-jwt-authz')

const checkPermissions = jwtAuthz(['use:role'], {
    customScopeKey: 'permissions'
})

module.exports = checkPermissions
