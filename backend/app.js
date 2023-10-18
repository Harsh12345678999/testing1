const express = require("express")
const app = express()
const cors = require('cors');
app.use(express.json())
app.use(cors());

app.use(cors({
    origin: ['https://vercel.com/harsh12345678999/school-managements-cnsic'],
    methods: ["POST", "GET"],
    credentials:true
  }));

app.get("/", (req, res) => {
    res.json("Hello")
})

//imports router
const product = require("./routers/productRouter")
app.use("/api/v1", product)

//middlewareError
const errorMiddleware = require("./middleware/error")
app.use(errorMiddleware)

module.exports = app