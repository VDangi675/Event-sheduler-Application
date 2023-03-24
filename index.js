const express = require("express")
const bodyparser = require("body-parser");
const { default: mongoose } = require("mongoose");

const app = express();

app.use(express.json())
const port = process.env.port|| 5000

mongoose.connect("mongodb+srv://VIKASDANGI:VIKASDANGI@cluster0.prsuazo.mongodb.net/?retryWrites=true&w=majority").then(()=>console.log("connected to db"))

const Event = require("./routes/Event")
app.use(Event)


app.listen(port,console.log(`server is on ${port}`))