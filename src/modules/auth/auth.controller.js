const express = require("express")
const authSerivce = require("./auth.service")
const apiResponse = require("../../utils/apiResponse")
const app = express()

async function register(req, res) {
    const { username, email, password } = req.body
}



module.exports = { }