// import express package 
const express = require('express');
const app = express();
const fs = require('fs')

let movies = JSON.parse(fs.readFileSync('./data/movies.json'));
app.use(express.json())


//Routes = http method + url

// for get request
// app.get('/', (req, res) => {
//     // res.status(200).send('<h4>Hello from express server</h4>')  // for html file
//     res.status(200).json({message:'Hello World', status:200})
// })



// Get - api/movies
app.get('/api/v1/movies', (req,res) => {
    res.status(200).json({
        status:"Success",
        count:movies.length,
        data: {
            movies: movies
        }
    })
});

// Post - api/movies
app.post('/api/v1/movies', (req,res) => {
    // console.log(req.body)
    const newId = movies[movies.length - 1].id + 1;
    const newMovie = Object.assign({id: newId}, req.body);
    movies.push(newMovie)
    fs.writeFile('./data/movies.json', JSON.stringify(movies), (err) => {
        res.status(201).json({
            status : 'success',
            data: {
                movie : newMovie
            }
        })
    })
});


// create a server 
const port = 3000;
app.listen(port, () => {
    console.log('Server Started....')
})

