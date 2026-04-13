const dotenv = require("dotenv")
const app = require("./app") 
const middlewares = require("./middlewares/authMiddleware")
dotenv.config()


const PORT = process.env.PORT || 3030

app.listen(PORT, () => {
    console.log(`Servidor on-line na porta ${PORT}`)
})
