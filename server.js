const express = require('express'),
cors = require('cors'),
bodyParser = require('body-parser'),
axios = require('axios');
require('dotenv').config();

const app =  express();
let characters = [];

app.use(bodyParser.json());
app.use(cors())

app.get('/api/characters', (req, res, next)=>{
    axios.get('https://swapi.co/api/people/')
        .then((response)=>{
            characters = response.data.results;
            res.send(characters)
        })
})


const port = process.env.PORT || 8000;

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})

