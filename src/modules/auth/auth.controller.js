const authSerivce = require("./auth.service")
const apiResponse = require("../../utils/apiResponse")

async function register(req, res) {
    try {
        const { username, email, password } = req.body
        if (!username || username.trim() === "") {
            return res.status(400).json(apiResponse.apiRes("Erro", "Preencha o campo de username"))
        }
        if (!email || email.trim() === "") {
            return res.status(400).json(apiResponse.apiRes("Erro", "Preencha o campo de email"))
        }
        if (!password || password.trim() === "") {
            return res.status(400).json(apiResponse.apiRes("Erro", "Preencha o campo de password"))
        }

        const newUser = await authSerivce.register({ username, email, password })

        return res.status(201).json(apiResponse.apiRes("Sucesso", "Conta registrada com êxito"))
    } catch (error) {
        throw new Error
    }
}



module.exports = { register }
