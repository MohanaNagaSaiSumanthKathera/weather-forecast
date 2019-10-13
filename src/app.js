const express = require('express');
const path = require('path');

const app = express();

// to fix absolute path for folder "public" where the static content is loaded
const publicDirectoryPath = path.join(__dirname,'../public');

//configuring default views path to another
const viewsPath = path.join(__dirname,'../templates');

app.use(express.static(publicDirectoryPath));


//handle bars - hbs --> template engine to implement dynamic websites. renders views folder by default
app.set('view engine', 'hbs');
app.set('views',viewsPath);

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