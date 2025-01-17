const mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost/mydatabase`);
const db = mongoose.connection;

db.on ("connected", (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log("Succesfully Connected to MongoDB Database");
})
module.exports = db;