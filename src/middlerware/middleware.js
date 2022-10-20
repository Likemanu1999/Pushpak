// const jwt = require('jsonwebtoken')

const middleware = async function (req, res, next) {
    
    try {
        
          next() 
    
    }  catch (error) {
        
        res.status(400).send({ status: false, msg: error }) }
    
    }
    
module.exports.middleware = middleware;