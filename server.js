const express = require('express');
const http = require('http');
const path = require('path');
const app = express();
const host = '127.0.0.1';
const port = 3600;

app.set('views', path.join(__dirname, '/'));
app.set('view engine','html');

app.use(express.static('public'));

http.createServer(app).listen(port, host, ()=>{
    console.log(`✅ Server is running on http://localhost:${port}`);
})
