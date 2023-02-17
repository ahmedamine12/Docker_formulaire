var express = require('express');
var app = express();
app.use(express.json())
app.use(express.static(__dirname + '/public')); 
app.use(express.urlencoded({ extended: true }))
var port = 8000; 

console.log('server on' + port);

app.post('/', (req, res) => {

    var user = req.body.user
    var pass = req.body.pass
    if (pass == "Bouricha") {
        res.send('<h2> Felicitation vos information sont corrects   </h2>');
    }
    else {
        res.send('<h2>  vos information sont incorrects   </h2>');
    }
})
app.listen(port);







