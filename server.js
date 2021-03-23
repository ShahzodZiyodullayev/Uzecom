const express = require("express")
const expressLayouts = require("express-ejs-layouts")
const app = express()
const path = require("path")

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))
app.use(expressLayouts)

app.use("/", require("./routes/pageRouter"))
const port = 1003
app.listen(port, (req, res) => {
    console.log(`Server is working in ${port} th port`)
})