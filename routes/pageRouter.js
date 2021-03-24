const express = require("express")
const router = express.Router()
const {homePage, catalog} = require("../controller/pageController")

router.get("/", homePage)
router.get("/catalog", catalog)

module.exports = router