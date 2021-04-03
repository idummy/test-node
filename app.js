const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('welcome home')
        res.end()
    }
    if (req.url === '/about') {
        res.write('its about me!')
        res.end()
    }
    else {
        res.write(`
        <p>page not exists</p>
        <p>back to <a href="/">home</p>
    `)
        res.end()
    }
})

server.listen(5000);
