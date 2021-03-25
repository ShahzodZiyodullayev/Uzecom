exports.homePage = (req, res) => {
    res.render("./page/homePage", {layout: "layout", title: "Bosh sahifa"})
}

exports.catalog = (req, res) => {
    res.render("./page/catalog", {layout: "layout", title: "Katalog"})
}

exports.Zakaz = (req, res) => {
    res.render("./page/Zakaz", {layout: "layout", title: "Buyurtma"})
}