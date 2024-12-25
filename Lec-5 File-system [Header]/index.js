const http = require('http');
const port = 8000;
const fs = require('fs');
const server = http.createServer((req, res) => {
    let fileName = "";
    switch (req.url) {
        case "/":
            fileName = './Home.html'
            break;
        case "/about":
            fileName = './About.html'
            break;
    }
    fs.readFile(fileName, (err, pagename) => {
        if (err) {
            console.log(`File Is Not Found`);
            return false
        }
        res.end(pagename)
    })
})
server.listen(port, (err) => {
    if (!err) {
        console.log(`Server Is Start On Port:-${port}`);
    }
})