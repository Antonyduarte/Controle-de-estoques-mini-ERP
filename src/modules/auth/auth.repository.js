const jwt = require("jsonwebtoken")
const mysql = require("mysql2/promise")
const base = require("../../config/db/db")

const connection = base.pool

async function userRegister(username, email, password) {

    const [result] = await connection.query("INSERT INTO users (username, email, password) VALUES(?, ?, ?)", [username, email, password])

    return result.insertId
}
// função para encontrar conta através do email do user
async function findByEmail(email) {
    
    const [rows] = await connection.query("SELECT * FROM users WHERE email = ?", [email])

    if (rows.length <= 0) {
       throw new Error
    } else {
        return rows[0] || null // retorna a primeira linha encontrada do banco ou null
    } 
}

async function userLogin(username, password) {
 
}

module.exports = { userRegister, findByEmail }