const User = require('../models/User')
const Thread = require('../models/Thread')

module.exports = async (req, res) => {

    let UserData = await User.findById(req.session.userId)

    try {
        // Fetch all products
        const threads = await Thread.find({});
        console.log("All Threads:", threads);
    
        // Pass the products data to the frontend
        res.render('forum', { threads, UserData });
      } catch (error) {
        console.error("Error fetching threads:", error);
    
        // Send an error message to the frontend
        res.status(500).render('error', { message: "Failed to fetch threads." });
      }
}
