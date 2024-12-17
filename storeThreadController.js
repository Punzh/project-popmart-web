const Thread = require('../models/Thread')

module.exports = (req, res) => {
    Thread.create(req.body).then(() => {
        console.log("Thread Submitted Successfully!")
        // Redirect to the same page to refresh
        res.redirect(req.get('referer'));
    }).catch((error) => {
        // Handle error (you can log or handle it further here)
        console.error(error);
        res.status(500).send("Error saving thread");
    });
}
