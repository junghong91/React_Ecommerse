import jwt from "jsonwebtoken";
import config from "./config";

const getToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    config.JWT_SECRET,
    {
      expiresIn: "48h",
    }
  );
};

// Authenticate  Users
const isAuth = (req, res, next) => {
  const token = req.headers.authorization; // get the token from headers.authorization
  if (token) {
    const onlyToken = token.slice(7, token.length); // access to the only token part(get rid of the bearer part)
    jwt.verify(onlyToken, config.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(401).send({ msg: "Invalid Token." });
      }
      // console.log(req.user); => undefined
      req.user = decode; // if token is collect
      next();
      return;
    });
  } else {
    // if the token doesn't exist
    return res.status(401).send({ msg: "Token is not supplied." });
  }
};

// Authenticate Admin.
const isAdmin = (req, res, next) => {
  // req.user is from isAuth => isAuth should be called first.
  if (req.user && req.user.isAdmin) {
    return next();
  }
  return res.status(401).send({ msg: "Admin Token is not valid." });
};

export { getToken, isAuth, isAdmin };
