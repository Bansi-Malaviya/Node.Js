const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    bookname: {
        type: String,
        required: true,
    },
    bookprice: {
        type: String,
        required: true,
    },
    bookpages: {
        type: String,
        required: true,
    },
    bookauthor: {
        type: String,
        required: true,
    },
})


const user = mongoose.model('user', userSchema);
module.exports = user;