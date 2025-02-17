const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true
    },

    password : {
        type : String,
        required : true
    }

})

const users = mongoose.model('loginuser',userSchema)


const blogUserSchema = mongoose.Schema({

    title : {
        type : String,
        required : true
    },

    description : {
        type : String,
        required : true
    },

    date : {
        type:String,
        require : true
    },

    image : {
        type : String,
        required : true
    }
    
})

const blogUser = mongoose.model("bloguser",blogUserSchema)

module.exports = {
    users,
    blogUser
}