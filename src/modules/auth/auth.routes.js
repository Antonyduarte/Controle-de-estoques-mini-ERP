const Router = require("express").Router()
const authController = require("./auth.controller")
const validator = require("./auth.validation")

Router.post("/register", validator.registerVerify, authController) 

Router.post("login", )

module.exports = { Router }