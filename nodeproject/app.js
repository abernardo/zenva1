var express = require("express");
var app = express();
var port = process.env.PORT;

app.use(express.static('public'));
app.use(express.static('src/views'));
app.use(express.static('bower_components'));

app.listen(port,function(err){
    console.log('the server is running on port: '+port);
});
app.get('/',function(req,res){
    res.send('<h3>Boda in the house</h3>');
});
app.get('/routing',function(req,res){
    res.send('<h3>Boda in the routing</h3>');
});