const express = require('express'),
    app = express(),
    hbs = require('hbs');
require('./hbs/helpers.js');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
//express HBS
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {

    res.render('home.hbs', {
        nombre: 'fRanciSco alFARo'
    });
})

app.get('/about', (req, res) => {

    res.render('about.hbs', {});
})

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
})