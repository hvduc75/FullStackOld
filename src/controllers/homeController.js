

let getHomePage = (req, res) => {
    return res.render("homepage.ejs");
}

// object: {
//    key : value
//    getHomePage : getHomePage
//}
module.exports = {
    getHomePage
}