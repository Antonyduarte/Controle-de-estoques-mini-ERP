const express = require("express")
const apiResponse = require("../../utils/apiResponse")

function registerVerify(req, res, next) {
    const { user, email, password } = req.body

    if (!user) {
        return res.status(400).json(apiResponse.response(
            "Error",
            "Usuário é obrigatório"
        ))
    }
    if (!email) {
        return res.status(400).json(apiResponse.response(
            "Error",
            "Email é obrigatório"
        ))
    }
    if (!password) {
        return res.status(400).json(apiResponse.response(
            "Error",
            "Senha é obrigatória"
        ))
    }
}
 

module.exports = { registerVerify }