import jwt from 'jsonwebtoken'

const authenticate = (req, res, next) => {
    const token = req.header('x-auth-token'); 
    if (!token) {
      return res.status(401).json({ msg: 'No token, authorization denied' });
    }
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY); // Verify the token using your secret key
      req.user = decoded.user; // Store the user data from the token in the request object
      next(); // Continue with the next middleware or route handler
    } catch (err) {
      res.status(401).json({ msg: 'Token is not valid' });
    }
};

export default authenticate
  
