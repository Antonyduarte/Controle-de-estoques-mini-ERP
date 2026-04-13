//express require
const express = require("express")
// const app
const app = express()


// rotas
const authRoutes = require("./modules/auth/auth.routes")
// const userRoutes = require("./modules/users/user.routes")
// const movementsRoutes = require("./modules/movements/movement.routes")
// const productRoutes = require("./modules/products/product.routes")
// const stockRoutes = require("./modules/stock/stock.routes")
// app.use("/register", authRoutes)
//middleware global de json
app.use(express.json())

app.use("/auth", authRoutes)
module.exports = app