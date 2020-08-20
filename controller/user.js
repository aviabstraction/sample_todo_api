const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const user = require('../models/user');
require('dotenv').config();

// const login = async (req, res) => {
//   if (req.body.email !== '' && req.body.password !== '') {
//     const user = await User.findOne({ email: req.body.email });
//     if (!user) return res.status(400).send('email or password is wrong');
//     const validpass = bcrypt.compare(req.body.password, user.password);
//     if (!validpass) return res.status(400).send('password is wrong');

//     const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);
//     res.header('auth-token', token).send(token);
//   }
// };

// const register = async (req, res) => {
//   if (
//     req.body.name !== '' &&
//     req.body.email !== '' &&
//     req.body.password !== ''
//   ) {
//     const emailExist = await User.findOne({ email: req.body.email });
//     if (emailExist) return res.status(400).send('email already exist');

//     const salt = await bcrypt.genSalt(10);
//     const hashpassword = await bcrypt.hash(req.body.password, salt);
//     const newUser = new User({
//       name: req.body.name,
//       email: req.body.email,
//       password: hashpassword,
//     });
//     try {
//       const savedUser = await newUser.save();
//       res.json(savedUser);
//     } catch (err) {
//       console.log(err);
//       res.status(400).send(err);
//     }
//   }
// };

const myregister = async (req, res) => {
  if (req.body.name !== '' && req.body.email !== '' && req.body.password) {
    const emailExist = await User.findOne({ email: req.body.email });
    console.log('emailExist', emailExist);
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
  register: myregister,
};
