const express = require("express");
const app = express();
const port = 3000 || process.env.port;
const path = require("path");
const http = require("http");
app.set('view engine', 'ejs');
const server = http.createServer(app);

server.listen(port, () => console.log(`Server running on port ${port}`));

app.get('/' , (req,res) =>{
    res.render('home')
})
app.get('/forums', (req,res) => {
    res.render('/forums')
})