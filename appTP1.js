var express = require('express');
var app = express();
app.use(express.json())
app.use(express.static(__dirname + '/public')); //__dir and not _dir
app.use(express.urlencoded({ extended: true }))
var port = 8000; // you can use any port

console.log('server on' + port);

app.post('/index', (req, res) => {

    var user = req.body.user
    var pass = req.body.pass
    if (pass == "amine") {
        res.send('<h2> Felicitation vos information sont corrects   </h2>');
    }
    else {
        res.send('<h2>  vos information sont incorrects   </h2>');
    }
})
app.listen(port);







