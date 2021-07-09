const {response} = require('express');
const express = require('express');
const app = express();

const port = 3000;


app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/imagenes', express.static(__dirname + 'public/imagenes'))
app.use('/js', express.static(__dirname + 'public/js'))

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/registro-form.html', (req, res)=>{
    res.sendFile(__dirname + '/views/registro-form.html')
    
})

app.listen(port, ()=> console.info(`Escuchando en el puerto ${port}`));

/*const path = require('path');

app.listen(process.env.PORT || 3000)*/

//app.use(express.static(path.join(__dirname ,'src/views')));

//Start the sever
/*app.get('/', function(req, res){
    
    console.log('Bienvenidos')
    res.sendFile(path.resolve(__dirname, 'src/views/index.html'))

});

module.exports = app;*/