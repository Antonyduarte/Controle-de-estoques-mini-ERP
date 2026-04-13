const jwt = require("jsonwebtoken")
const mysql = require("mysql2/promise")
const pool = require("../../config/db/db")

const connection = pool

// função para encontrar conta através do email do user
async function findByEmail(email) {

    const [rows] = await connection.query("SELECT * FROM users WHERE email = ?", [email])
    
    return rows[0] || null
}
async function findByUsername(username) {
    const [rows] = await connection.query("SELECT * FROM users WHERE username = ?", [username])

    return rows[0] || null
}
async function userRegister(username, email, password) {
    

    const [result] = await connection.query("INSERT INTO users (username, email, password) VALUES(?, ?, ?)", [username, email, password])

    return result.insertId
}
async function userLogin(username, password) {

}

module.exports = { userRegister, findByEmail, findByUsername }