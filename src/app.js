const express = require('express');
const path = require('path');

const app = express();

const publicDirectoryPath = path.join(__dirname,'../public');

app.use(express.static(publicDirectoryPath));

//handle bars - hbs --> template engine to implement dynamic websites. renders views folder by default
app.set('view engine', 'hbs');

app.get('', (req,res)=>{
    res.render('index',{
        title : 'Home Page',
        name : 'Sumanth'
    })
});

app.get('/about',(req,res)=>{
    res.render('about');
});

app.get('/help',(req,res)=>{
    res.render('help');
});

app.get('/weather',(req,res)=>{
    res.send({
        forecast : 'It is snowing',
        location : 'vijayawada'
    });
})
app.listen(3000,()=>{
    console.log("server is up and running!..");
});