const mongoose = require('mongoose');
const dataSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    image : {
        type : String,
        required : true
    }
})
const movieCrud = mongoose.model('moviecrud',dataSchema);
module.exports = movieCrud;