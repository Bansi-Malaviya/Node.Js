// logout user code 
const checkUserLogin = (req,res,next) => {
    if (!req.cookies?.auth) {
        return res.redirect('/')
    }
    return next();
}

module.exports = {
    checkUserLogin
}




