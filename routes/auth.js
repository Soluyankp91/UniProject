const express = require("express");
const authRouter = express.Router();

const controller = require("../controllers/AuthController");

const { isUserExist } = require("../middlewares/isUserExist");

//user registration
authRouter.post("/register", isUserExist, controller.registerUser);

authRouter.post("/login")
module.exports = authRouter;
