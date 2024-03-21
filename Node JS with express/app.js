// import express package 
const express = require('express');
const app = express();
const fs = require('fs')

//Routes = http method + url

// for get request
// app.get('/', (req, res) => {
//     // res.status(200).send('<h4>Hello from express server</h4>')  // for html file
//     res.status(200).json({message:'Hello World', status:200})
// })

let movies = JSON.parse(fs.readFileSync('./data/movies.json'));

// Get - api/movies

app.get('/api/v1/movies', (req,res) => {
    res.status(200).json({
        status:"Success",
        count:movies.length,
        data: {
            movies: movies
        }
    })
})

// create a server 
const port = 3000;
app.listen(port, () => {
    console.log('Server Started....')
})

