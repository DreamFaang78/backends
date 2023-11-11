require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('<h1>Let Us Start Coding!</h1>')
})
app.get('/about', (req, res) => {
    res.send('<h1>About</h1>')
})
app.get('/chai', (req, res) => {
    res.send('<h1>Contact</h1>')
})


app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})