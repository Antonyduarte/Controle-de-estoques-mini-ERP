const express = require("express")
const apiRes = require("../utils/apiResponse")
const app = express()

app.use(express.json())

app.use((req, res) =>{
    res.status(404).json(apiRes.response(
        "Error",
        "Rota não encontrada",
        0,
        null
    ))
})