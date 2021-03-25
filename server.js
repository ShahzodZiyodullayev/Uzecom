const express = require("express")
const expressLayouts = require("express-ejs-layouts")
const app = express()
const bodyParser = require("body-parser")
const methodOverride = require("method-override")
const path = require("path")
const cors = require("cors")
const connectDB = require("./bin/db")
connectDB()

app.use(bodyParser.json())
app.use(cors())
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))
app.use(expressLayouts)
app.use(methodOverride("_method", {
    methods: ['POST', 'GET','PUT','DELETE']
}))

app.use("/", require("./routes/pageRouter"))
app.use("/", require("./routes/adminRouter"))
const port = 1003
app.listen(port, (req, res) => {
    console.log(`Server is working in ${port} th port`)
})