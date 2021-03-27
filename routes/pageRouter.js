const express = require("express")
const router = express.Router()
const {homePage, catalog, detalkaZakaz, zakaz} = require("../controller/pageController")

router.get("/", homePage)
router.get("/catalog", catalog)
router.get("/detalkaZakaz", detalkaZakaz)
router.get("/zakaz", zakaz)
module.exports = router