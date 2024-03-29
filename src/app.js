const express = require('express');
const path = require('path');
const hbs = require('hbs');
const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');

const app = express();
const port = process.env.PORT || 3000;
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
    if(!req.query.address){
         return  res.send({ error: 'Please provide the query string'});
    }
    //destructing object get undefined as result ---> so we have to use default parameters to null
    geocode(req.query.address,(error,{latitude,longitude,location}={})=>{
        if(error){
            return res.send({error});
        }
        forecast(latitude,longitude,(error,forecastData)=>{
                if(error){
                    return res.send({error});
                }
                    res.send({
                        forecast : forecastData,
                        location,
                        address: req.query.address
                    });
                
            });
        
    });
    
});

app.get('/help/*',(req,res)=>{
    res.render('404',{
        title : 'Help Page',
        name : 'Sumanth',
        errormsg : 'Help content not found'
    });
});

app.get('/*',(req,res)=>{
    res.render('404',{
        title : '404 Page',
        name : 'Sumanth',
        errormsg : 'Page not found'
    });
});

app.listen(port,()=>{
    console.log("server is up and running!.."+ port);
});