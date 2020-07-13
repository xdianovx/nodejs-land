'use strict';

const express = require('express');

const app = express();

const handlebars = require('express-handlebars')
    .create({ defaultLayout: 'main' });


app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));


app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.render('home', {
        layout: 'main',
    });
});

app.listen(app.get('port'), function () {
    console.log('Express starnted on port http://localhost:' + app.get('port'))
})