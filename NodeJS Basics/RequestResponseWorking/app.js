const readline = require('readline')
const http = require ('http');
const fs = require('fs')

const html = fs.readFileSync('./index.html', 'utf-8')

// Step 1 : Create Server 

const app = http.createServer((req, resp) => {
    resp.end(html)
    console.log('A new request Recieved');
    // console.log(req)
    // console.log(resp)
})

// Step 2 : Start Server 

// app.listen(8000, '127.0.0.1', () => {
//     console.log('Server started successfully')
// })

app.listen(8000, 'localhost', () => {
    console.log('Server started successfully')
})