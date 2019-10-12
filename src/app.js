const express = require('express');

const app = express();

app.get('',(req,res)=>{
    res.send("Hello Express Sushma");
})

app.get('/help',(req,res)=>{
    res.send("Help Page loaded....");
});

app.get('/about',(req,res)=>{
    res.send("route Page loaded....");
})

app.get('/weather',(req,res)=>{
    res.send("weather Page loaded....");
})
app.listen(3000,()=>{
    console.log("server is up and running!..");
});