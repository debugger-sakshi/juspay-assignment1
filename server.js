var express = require('express'),
path = require('path');
const fs = require('fs');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser());
const querystring = require('querystring'); 
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', (req, res) => {
res.sendFile(path.join(__dirname, 'build', '/index.html'));
})
app.post('/response', (req, res) => {
const query = querystring.stringify(req.body);
 res.redirect(`/pg-status/?` + query)
})
app.listen(3000,function () {
console.log('Express server listening on http://0.0.0.0:3000.');
}); 
