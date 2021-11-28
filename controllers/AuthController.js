const express = require("express");
const bcrypt = require("bcrypt");
const { createUser } = require("../repository/users");

const { sendEmail } = require("../services/emailService");

module.exports = {
  async registerUser(req, res, next) {
    let { name, surname, middlename, ipn, passport, password, email} = req.body;
    password = await bcrypt.hash(password,10);
    createUser({
      name,
      surname,
      middlename,
      ipn,
      passport,
      password,
      email
    }).then((responseData) => {
      res
        .status(200)
        .json({ message: "Default user was successfully created" });
      sendEmail(responseData.email, "Your login", responseData);
    });
  },
//   loginUser(req, res, next) {
//       let {id:login, password}
//   },
};
