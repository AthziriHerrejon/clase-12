const http = require ('http');
const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.write('ni hao') //res significa response. Sirve para llamar un servidor local en un navegador.
    res.end()
    })
    server.listen(9000)