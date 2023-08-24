const User = require("../models/user.model");
const Token = require("../models/token.model");
const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(402).json({ message: "please fill all the fields" });
    }

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      return res
        .json({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user._id),
        })
        .status(200);
    } else {
      return res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (err) {
    return res.json({ message: "Could not login" }).status(err.statusCode);
  }
};

const userSignup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    const generatedToken = generateToken(user._id);
    await Token.create({
      email: user.email,
      token: generatedToken,
    });

    if (user) {
      return res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generatedToken,
      });
    } else {
      return res.status(400).json({ message: "Invalid user data" });
    }
  } catch (err) {
    console.log(err);
    return res
      .json({ message: "Could not register the user" })
      .status(err.statusCode);
  }
};

module.exports = {
  userLogin,
  userSignup,
};
