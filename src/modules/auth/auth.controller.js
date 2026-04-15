const authSerivce = require("./auth.service")
const apiResponse = require("../../utils/apiResponse")

async function register(req, res) {
    try {
        const { username, email, password } = req.body
    
        const newUser = await authSerivce.register(username, email, password)

        return res.status(201).json(apiResponse.apiRes("Sucesso", "Conta registrada com êxito"))

    } catch (error) {
        if (error.message === "EMAIL_ALREADY_EXISTS" || error.message === "USER_ALREADY_EXISTS") {
            return res.status(400).json(apiResponse.apiRes(
                "Erro",
                "Email ou usuário já em uso"
            ))
        } else {
            return res.status(500).json(apiResponse.apiRes(
                "Erro",
                "Erro interno",
                0,
                null
            ))
        }
    }
}

module.exports = { register }
