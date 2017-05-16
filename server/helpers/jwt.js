const jwt = require('jsonwebtoken');

let jwtAuthenticate = function(req, res, next){
  jwt.verify(req.headers.token, 'secret', function(err,decoded){
    if(decoded){
      next()
    }
    if(err) res.send(err);
  })
  
}

module.exports = {jwtAuthenticate};