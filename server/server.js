const express = require("express")
const cors = require("cors")
const connectiontoDB = require("./config/connectiontoDB")
const UserModel = require("./models/userModel")
const UserRoute = require("./routes/UserRoute")

require("dotenv").config()

const app = express()

// Middleware for parsing request body
app.use(express.json())

// Middleware for handling CORS POLICY
app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type'],
    })
);

app.get("/", (req, res) => {
    res.json("Hello");
})

app.use("/user", UserRoute) // User Route

// connection to db
connectiontoDB()
app.listen(3000, () => {
    console.log("Server has started Successfully")
})
