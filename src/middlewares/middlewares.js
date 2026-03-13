const dotenv = require("dotenv")
const express = require("express")
const jwt = require("jsonwebtoken")
const cors = require("cors")
const appJs = require("../server")
const apiResponse = require("../utils/apiResponse")

// authToken middleware

const authToken = (req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.status(401).json(apiResponse.response("Erro", "Token inválido"))
    }

    const token = authHeader.split(" ")[1]
    try {
        req.userId = jwt.verify(token, process.env.SECRET_KEY,).id
        next()
    } catch (err) {
        return res.status(401).json(
            apiResponse.response("Erro", err) 
        )
    }   
}