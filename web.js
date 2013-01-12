var express = require('express');

var app = express.createServer(express.logger());

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.use('/static', express.static(__dirname + '/static'));

app.get('/', function (request, response) {
    response.render('home', {layout: false});
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Listening on ' + port);
});