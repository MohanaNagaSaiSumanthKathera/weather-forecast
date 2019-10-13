const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

//defining paths
// to fix absolute path for folder "public" where the static content is loaded
//defining default views path to another
const publicDirectoryPath = path.join(__dirname,'../public');
const viewsPath = path.join(__dirname,'../templates/views');
const partialPath = path.join(__dirname,'../templates/partials');

//configuring view engine, views , partials
//handle bars - hbs --> template engine to implement dynamic websites. renders views folder by default
app.set('view engine', 'hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialPath);

//setting up the static direcory to serve.
app.use(express.static(publicDirectoryPath));

app.get('', (req,res)=>{
    res.render('index',{
        title : 'Home Page',
        name : 'Sumanth'
    })
});

app.get('/about',(req,res)=>{
    res.render('about',{
        title : 'About Page',
        name : 'Sumanth'
    });
});

app.get('/help',(req,res)=>{
    res.render('help',{
        title : 'Help Page',
        name : 'Sumanth'
    });
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