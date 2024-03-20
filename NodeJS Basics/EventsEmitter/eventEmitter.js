const http = require('http');
const url = require('url')
const evets = require('events')
const fs = require('fs')

const server = http.createServer();

const html = fs.readFileSync('./index.html', 'utf-8')

server.on('request', (request, response) => {
    let path = request.url;
    if(path === '/' || path.toLocaleLowerCase() === '/home'){
        response.writeHead(200, {
            'Content-Type' : 'text/html',
            'my-header' : 'Hello User'
        });
        response.end(html.replace('{{%content%}}','You are in Home page'))
    } else if(path.toLocaleLowerCase() === '/about'){
        response.writeHead(200, {
            'Content-Type' : 'text/html',
            'my-header' : 'Hello User'
        })
        response.end(html.replace('{{%content%}}','You are in About page'))
    } else if(path.toLocaleLowerCase() === '/contact'){
        response.writeHead(200, {
            'Content-Type' : 'text/html',
            'my-header' : 'Hello User'
        })
        response.end(html.replace('{{%content%}}','You are in Contact page'))
    } else {
        response.writeHead(404, {
            'Content-Type' : 'text/html',
            'my-header' : 'Hello User'
        })
        response.end(html.replace('{{%content%}}','Error 404: Page not found!'))
    }
})

server.listen(8000, 'localhost', () => {
    console.log('Server has been Started!')
})

let myEmitter = new evets.EventEmitter();

myEmitter.on('userCreated', () => {
    console.log('new user is created!')
});

myEmitter.emit('userCreate');