const path = require('path');
const express = require('express')

const app = express()
const port = 80

app.use(express.static('./'))
app.get('/', (req, res) => res.sendFile('login.html', { root: path.join(__dirname, './') }))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))