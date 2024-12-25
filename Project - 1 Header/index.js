const http = require('http');
const port = 9000;
const fs = require('fs');
const server = http.createServer((req, res) => {
    let fileName = "";
    switch (req.url) {
        case "/":
            fileName = "./Home.html";
            break;
        case "/About":
            fileName = "./About.html";
            break;
        case "/Blog":
            fileName = "./Blog.html";
            break;
        case "/Contact":
            fileName = "./Contact.html";
            break;
        case "/FAQ":
            fileName = "./FAQ.html";
            break;
        case "/Gallery":
            fileName = "./Gallery.html";
            break;
        case "/Pages":
            fileName = "./Pages.html";
            break;
        case "/Register":
            fileName = "./Register.html";
            break;
        case "/Protfolio":
            fileName = "./Protfolio.html";
            break;
        case "/Services":
            fileName = "./Services.html";
            break;
        case "/Team":
            fileName = "./Team.html";
            break;
        case "/Login":
            fileName = "./Login.html";
            break;
    }
    fs.readFile(fileName, (err, pagename) => {
        if (err) {
            console.log("page not found");
            return false;
        }
        res.end(pagename);
    })
})
server.listen(port, (err) => {
    if (!err) {
        console.log(`server is running on port ${port}`);
    }
})