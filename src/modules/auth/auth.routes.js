const Router = require("express").Router()
const authController = require("./auth.controller")
const authRepository = require("./auth.repository")
const validator = require("./auth.validation")

Router.post("/register", validator.registerVerify, authController) 

Router.post("login", )

module.exports = { Router }