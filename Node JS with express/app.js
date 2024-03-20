// import express package 
const express = require('express');
const app = express();

//Routes = http method + url

// for get request
app.get('/', (req, res) => {
    // res.status(200).send('<h4>Hello from express server</h4>')  // for html file
    res.status(200).json({message:'Hello World', status:200})
})

// for post request
app.post('/', () => { 

})

// create a server 
const port = 3000;
app.listen(port, () => {
    console.log('Server Started....')
})

