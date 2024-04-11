const jwt = require('jsonwebtoken');
const secrect = process.env.JWT_SECURITY;
const expiresIn = process.env.JWT_EXPIRATION
console.log("Secret Key:", secrect);  // Check the secret key
console.log("Expires In:", expiresIn);  // Check the expiration time


const generateToken = (payload) => {
  try {
    return jwt.sign(payload, secrect, { expiresIn });
  } catch (error) {
    console.error('Token generation failed:', error.message);
    throw new Error('Token generation failed');
  }
};

const verifyToken = (token) => {
  try {
    console.log('verifyToken_token', token);
    
    const decoded = jwt.verify(token, secrect);
    console.log('verifyToken', decoded);
  
    return decoded;
  } catch (error) {
    console.error('Token verification failed:', error.message);
    throw new Error('Token verification failed');
  }
}

module.exports = {
  generateToken,
  verifyToken
}