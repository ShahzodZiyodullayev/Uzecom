exports.homePage = (req, res) => {
    res.render("./page/homePage", {layout: "layout", title: "Bosh sahifa"})
}

exports.catalog = (req, res) => {
    res.render("./page/catalog", {layout: "layout", title: "Katalog"})
}

exports.detalkaZakaz = (req, res) => {
    res.render("./page/detalkaZakaz", {layout: "layout", title: "Buyurtma"})
}

exports.zakaz = (req, res) => {
    res.render("./page/zakaz", {layout: "layout", title: "Buyurtma"})
}