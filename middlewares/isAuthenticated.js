const  { verifyToken } = require("../services/jwt");

const isAuthenticated = (req, res, next) => {
  const token = req.headers.authorization;
  if(!token){
    return res.status(401).json({message: "No token provided"});
  }
  try {
    const cleanedToken = token.replace('Bearer', '').trim();
    const decoded = verifyToken(cleanedToken);
    next();
  } catch (error) {
    return res.status(401).json({message:'Token is invalid'});
  }
}

module.exports = isAuthenticated;