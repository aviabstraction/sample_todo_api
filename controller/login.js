const User = require('../models/user');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const login = (req, res) => {
  //   const { user_name: userName, password: pwd } = req.body;
  //  user_name: ('avinash');
  //   password: ('xyz');
  //   const getUser = await User.find({ user_name: userName, password: pwd });
  //   if (userName.length > 0 && pwd.length > 8) {
  //     User.find({ user_name: userName, password: pwd })
  //       .then((data) => {
  // console.log(data);
  //         const token = jwt.sign(
  //           { user_name: data.userName },
  //           process.env.SECRET_KEY,
  //           { expiresIn: '2d' }
  //         );
  //         res.json({
  //           token: token,
  //           user_data: data,
  //         });
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
};

module.exports = login;
