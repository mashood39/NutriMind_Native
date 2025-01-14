const jwt = require('jsonwebtoken')

const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if(!token) {
        return res.status(401).json({message: 'Access denied no token provided'})
    }

    try{
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decoded
        next();
    } catch (error){
        res.status(400).json({message: 'invalid token'})
    }
}

module.exports = authenticate;