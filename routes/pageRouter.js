const express = require("express")
const router = express.Router()
const {homePage, catalog, Zakaz} = require("../controller/pageController")

router.get("/", homePage)
router.get("/catalog", catalog)
router.get("/Zakaz", Zakaz)
module.exports = router