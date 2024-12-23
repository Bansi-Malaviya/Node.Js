const http = require("http");
const port = 8000;

const server = http.createServer((req, res) => {
    res.write(`<h1>Hello world</h1>`);
    res.write(`<h1>Lecture - 4. In Node.Js</h1>`);
    res.write(`<h1 style='color: red'>Create Server</h1>`);
    res.end();
});
server .listen(port, (err) => {
    if (!err) {
        console.log(`server is start:-${port}`);
    }
});