'use strict';

let developerNameDefault = "Evgeniy";
let developerContryDefault = 'Russia';
const express = require('express');
const bodyParser = require('body-parser')

const app = express();

const handlebars = require('express-handlebars')
    .create({ defaultLayout: 'main' });


app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}))

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.render('home', {
        layout: 'main',
        developerName: developerNameDefault, 
        countryName: developerContryDefault
    });
});

app.post('/contact', (req, res) => {
  console.log(req.body)
  res.render('contact')
});


app.use(function(req, res) {
    res.status(404);
    res.render('404');
})

app.use(function(err, req, res) {
    console.error(err)
    res.status(500);
    res.render('500');
})

app.listen(app.get('port'), function () {
    console.log('Express starnted on port http://localhost:' + app.get('port'))
})