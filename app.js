const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const SERVER_PORT = 4001;


app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get('/',(req,res)=>{
    res.render('index',)
});


app.listen(SERVER_PORT, ()=>{
    console.log("Server has started on port ",SERVER_PORT);
});