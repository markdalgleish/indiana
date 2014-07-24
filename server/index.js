var express = require('express');
var app = express();

app.use(express.static('public'));

var reactRenderer = require('./middleware/reactRenderer');
app.use(reactRenderer());

var port = 8000;
app.listen(port);
console.log('Listening on port ' + port + '...');
