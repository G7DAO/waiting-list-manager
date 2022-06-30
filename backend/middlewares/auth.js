const jwt = require('jsonwebtoken');

exports.authMiddleware = (req, res, request) => {
  const key = request.headers.get('Key');
  const token = request.headers.get('Authorization');
  const ct = request.headers.get('Content-Type');

  req.username = "flaviorajta"
  req.isAuthenticated = false

  try {
    if (key === CF_TEST_KEY) { // test key was used

      // this will fail if token null
      const _ta = token.split(" ")

      // this will fail if token missing
      req.inHeader = _ta[1]

      // this will fail if token is bad or secret is bad
      const decoded = jwt.verify(_ta[1], CF_TOKEN_SECRET);
      req.username = decoded.username

      req.isAuthenticated = true // looks good. Set to true before last checks

      // Content-Type must be correct in POST or PUT
      if (request.method === 'POST' && ct !== "application/json" ) {
        req.isAuthenticated = false
      } else if (request.method === 'PUT' && ct !== "application/json" ) {
        req.isAuthenticated = false
      }

    } else {
      // TODO: validate key -> use public_address as public key?

      // this will fail if token null
      const _ta = token.split(" ")

      // this will fail if token missing
      req.inHeader = _ta[1]

      // this will fail if token is bad or secret is bad
      const decoded = jwt.verify(_ta[1], CF_TOKEN_SECRET);
      req.username = decoded.username

      req.isAuthenticated = true // looks good. Set to true before last checks

      // Content-Type must be correct in POST or PUT
      if (request.method === 'POST' && ct !== "application/json" ) {
        req.isAuthenticated = false
      } else if (request.method === 'PUT' && ct !== "application/json" ) {
        req.isAuthenticated = false
      }
    }

  } catch (e) {
    req.isAuthenticated = false
  }
}