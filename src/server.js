const dotenv = require("dotenv")
const express = require("express")
const middlewares = require("./middlewares/authMiddleware")
dotenv.config()

const app = express()

//JSON 
app.use(express.json())

const PORT = process.env.PORT || 3030

app.listen(PORT, () => {
    console.log(`Servidor on-line na porta ${PORT}`)
})

module.exports = {app}