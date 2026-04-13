const express = require("express")
const router = express.Router()
const authController = require("./auth.controller")
const validator = require("./auth.validation")

router.post("/register", authController.register)

module.exports = router