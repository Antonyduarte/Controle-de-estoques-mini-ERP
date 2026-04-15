const express = require("express")
const router = express.Router()
const authController = require("./auth.controller")
const { registerVerify } = require("./auth.validation")

router.post("/register", registerVerify, authController.register)

module.exports = router