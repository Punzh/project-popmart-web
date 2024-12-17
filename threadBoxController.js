module.exports = (req, res) => {

    let email = ""
    let description = ""
    let data = req.flash('data')[0]

    if (typeof data != "undefined") {
        email = data.email
        description = data.description
    }

    res.render('forum', {
        email: email,
        description: description
    })
}