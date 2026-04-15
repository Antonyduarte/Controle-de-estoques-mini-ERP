const apiResponse = require("../../utils/apiResponse")

function registerVerify(req, res, next) {
    const { username, email, password } = req.body

    if (!username || username.trim() === "") {
        return res.status(400).json(apiResponse.apiRes(
            "Erro",
            "Usuário é obrigatório"
        ))
    }
    if (!email || email.trim() === "") {
        return res.status(400).json(apiResponse.apiRes(
            "Erro",
            "Email é obrigatório"
        ))
    }
    if (!password || password.trim() === "") {
        return res.status(400).json(apiResponse.apiRes(
            "Erro",
            "Senha é obrigatória"
        ))
    }
    return next()
}

module.exports = { registerVerify }