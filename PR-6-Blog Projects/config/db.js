// const moongoose = require('mongoose');
// moongoose.connect(`mongodb://localhost/PR-6`)
// const db = moongoose.connection;
// db.on("connected",(err)=>{
//     if (err) {
//         console.log(err);
//         return false
//     }
//     console.log(`DATABASE CONNECTED`);
// })
// module.exports = db;


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/PR-6');

const db = mongoose.connection;

db.on("connected",(err)=>{
    if (err) {
        console.log(err);
        return false
    }
    console.log("DATABSE CONNECTED SUCCESSFULLY..!");
})
module.exports = db;