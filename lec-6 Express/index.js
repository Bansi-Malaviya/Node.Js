const express = require('express');
const port = 9000;
const app = express();
app.get('/', (req, res) => {
    res.write('<h1>Hello World</h1>');
    res.write('<h2>This is a simple express app</h2>');
    res.end();
});
app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`Server is running on port : http//:localhost:${port}`);
});