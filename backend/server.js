const app = require("./app")
const dotenv = require("dotenv")
dotenv.config({path:"backend/config/config.env"})

//mongodb connnection
const connectDatabase = require("./config/database")
connectDatabase()

//server connection
app.listen(process.env.PORT,() => {
    console.log(`server is connected with http://localhost:${process.env.PORT}`)
})
