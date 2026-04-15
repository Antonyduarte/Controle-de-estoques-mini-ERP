const authRepository = require("./auth.repository")
const authToken = require("../../middlewares/authMiddleware")
const bcrypt = require("bcrypt")


async function register(username, email, password) {
    // Verificação de email existente
    const emailExists = await authRepository.findByEmail(email)
    
    if(emailExists) {
        throw new Error("EMAIL_ALREADY_EXISTS")
    }
    const userExists = await authRepository.findByUsername(username)

    if (userExists) {
        throw new Error("USER_ALREADY_EXISTS")
    }

    // hasheia a senha enviada pelo usuário.
    const hashedPass = await bcrypt.hash(password, 10)

    const user = await authRepository.userRegister(username, email, hashedPass)

    return{
        id: user.id,
        name: user.username,
        emai: user.email
    }
}

// async function login(email, password) {
    
// }

module.exports = { register }