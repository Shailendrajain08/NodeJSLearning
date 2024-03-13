const http = require ('http');

// Step 1 : Create Server 

const app = http.createServer((req, resp) => {
    resp.end('hello from the server ')
    console.log('A new request Recieved');
    // console.log(req)
    // console.log(resp)
})

// Step 2 : Start Server 

app.listen(8000, '127.0.0.1', () => {
    console.log('Server started successfully')
})