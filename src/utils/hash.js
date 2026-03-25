require("dotenv").config()

const md5hash = process.env.SECRET_KEY

module.exports = md5hash