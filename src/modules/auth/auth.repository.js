const { JsonWebTokenError } = require("jsonwebtoken")
const mysql = require("mysql2/promise")
const base = require("../../config/db/db")

const connection = base

async function userRegister(username, email, password) {

    const [result] = await connection.query("INSERT INTO users (username, email, password) VALUES(?, ?, ?)", [username, email, password])

    return result.insertId
}

async function userLogin(username, password) {
    
}


module.exports = { userRegister }