const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

const myLogin = async (req, res, next) => {
  if (req.body.email !== '' && req.body.password !== '') {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('email or password is wrong');
    const validPassword = bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('password is wrong');
    //generate token

    const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY, {
      expiresIn: '2d',
    });
    res.send(token);
  }
};

const myregister = async (req, res) => {
  if (req.body.name !== '' && req.body.email !== '' && req.body.password) {
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) return res.status(400).send('email already exist');
    else {
      //generating salt
      const salt = await bcrypt.genSalt(10);
      //hashing password
      const hashpassword = await bcrypt.hash(req.body.password, salt);
      //saving the hashed password
      const newuser = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashpassword,
      });

      newuser
        .save()
        .then((data) => {
          res.status(200).send(data);
        })
        .catch((err) => {
          res.status(400).send(err);
        });
    }
  }
};

module.exports = {
  login: myLogin,
  register: myregister,
};
