const path = require('path');
const express = require('express');

const app = express();
const port = 80;

// serving static files and opening login.html
app.use(express.static('./'));
app.get('/', (req, res) => res.sendFile('login.html', { root: path.join(__dirname, './') }));



app.listen(port);