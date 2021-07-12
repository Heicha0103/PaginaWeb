require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const routes = require("../routes/index");

const app = express();

// settings
const port = 8000;
app.set("port", process.env.PORT || port);

// middlewares
app.use(cors());
app.use(
    express.urlencoded({
        extended: false,
    })
);
app.use(express.json());

// routes
app.use("/api/", routes);

// static files
app.use(express.static(path.join(__dirname, "../public")));

module.exports = app;

/*const {response} = require('express');
const express = require('express');
const app = express();

const port = 3000;


app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/imagenes', express.static(__dirname + 'public/imagenes'))
app.use('/js', express.static(__dirname + 'public/js'))

app.set('views','./views')
app.set('view engine', 'ejs')

app.get('', (req, res)=>{
    res.render('index')
    
})

app.listen(port, ()=> console.info(`Escuchando en el puerto ${port}`));*/

/*const path = require('path');

app.listen(process.env.PORT || 3000)*/

//app.use(express.static(path.join(__dirname ,'src/views')));

//Start the sever
/*app.get('/', function(req, res){
    
    console.log('Bienvenidos')
    res.sendFile(path.resolve(__dirname, 'src/views/index.html'))

});

module.exports = app;*/