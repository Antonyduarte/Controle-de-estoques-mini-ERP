const authRepository = require("./auth.repository")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


async function register(username, email, password) {
    // Verificação de email existente
    const userExists = await authRepository.findByEmail(email)
    
    if(userExists) {
        throw new Error("Este email já está sendo utilizado por outro usuário")
    }
    // hasheia a senha enviada pelo usuário.
    const hashedPass = await bcrypt.hash(password, 10)

    const user = await authRepository.userRegister(username, email, password)

    return{
        id: user.id,
        name: user.username,
        emai: user.email
    }
}

