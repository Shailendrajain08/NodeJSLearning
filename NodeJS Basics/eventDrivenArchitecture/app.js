const readline = require('readline')
const http = require ('http');
const fs = require('fs')

const html = fs.readFileSync('./index.html', 'utf-8')

// Step 1 : Create Server 

const server = http.createServer();

server.on('request', (req, resp) => {
    let path = req.url;
    if(path === '/' || path.toLocaleLowerCase() === '/home'){
        resp.writeHead(200, {
            'Content-Type' : 'text/html',
            'my-header' : 'Hello User'
        });
        resp.end(html.replace('{{%content%}}','You are in Home page'))
    } else if(path.toLocaleLowerCase() === '/about'){
        resp.writeHead(200, {
            'Content-Type' : 'text/html',
            'my-header' : 'Hello User'
        })
        resp.end(html.replace('{{%content%}}','You are in About page'))
    } else if(path.toLocaleLowerCase() === '/contact'){
        resp.writeHead(200, {
            'Content-Type' : 'text/html',
            'my-header' : 'Hello User'
        })
        resp.end(html.replace('{{%content%}}','You are in Contact page'))
    } else {
        resp.writeHead(404, {
            'Content-Type' : 'text/html',
            'my-header' : 'Hello User'
        })
        resp.end(html.replace('{{%content%}}','Error 404: Page not found!'))
    }
})

// Step 2 : Start Server 

// app.listen(8000, '127.0.0.1', () => {
//     console.log('Server started successfully')
// })

server.listen(8000, 'localhost', () => {
    console.log('Server started successfully')
})