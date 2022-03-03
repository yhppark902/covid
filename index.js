const express = require('express');
const api = require('novelcovid');
const {engine} = require('express-handlebars');
const {response} = require("express");
const axios = require('axios');


const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');



app.get('/', (req, res) => {
    axios.get('https://api.covid19api.com/summary').then(response => {
        res.render('ds0',{info:response.data})
    });
});

app.get('/ds1', (req, res) => {
    api.countries()
        .then((response)=>{
            res.render('ds1',{info:response});
        })
    api.countries()
        .then(
            console.log);
});

app.get('/ds2', (req, res) => {
    api.historical.all()
        .then((response)=>{
            res.render('ds2',{info:response});
        })
    api.historical.all({info:response})
        .then(console.log);
});

app.listen(4000,()=>{
    console.log("App is listening on port 4000")
});