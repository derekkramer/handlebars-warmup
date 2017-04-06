var store3 = require('./store3-data.js')
const express = require('express')

const app = express()

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('index', {dates: store3})
})

app.listen(3000, () => {
    console.log('App running on 3000')
})
