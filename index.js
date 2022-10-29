
const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            res.writeHead(200, {
                'Content-type': 'text/html'
            });
            fs.readFile('./views/index.html', (err, page) => {
                res.write(page);
                res.end();
            });
            break;

        case '/warum':
            res.writeHead(200, {
                'Content-type': 'text/html'
            });
            fs.readFile('./views/warum.html', (err, page) => {
                res.write(page);
                res.end();
            })
            break;

        case '/was':
            res.writeHead(200, {
                'Content-type': 'text/html'
            });
            fs.readFile('./views/was.html', (err, page) => {
                res.write(page);
                res.end();
            });
            break;

        case '/wer':
            res.writeHead(200, {
                'Content-type': 'text/html'
            });
            fs.readFile('./views/wer.html', (err, page) => {
                res.write(page);
                res.end();
            })
            break;

        case '/wer/krassimir':
            res.writeHead(200, {
                'Content-type': 'text/html'
            });
            fs.readFile('./views/krassimir.html', (err, page) => {
                res.write(page);
                res.end();
            });
            break;

        case '/wer/karin':
            res.writeHead(200, {
                'Content-type': 'text/html'
            });
            fs.readFile('./views/karin.html', (err, page) => {
                res.write(page);
                res.end();
            });
            break;

        case '/aktuelles':
            res.writeHead(200, {
                'Content-type': 'text/html'
            });
            fs.readFile('./views/aktuelles.html', (err, page) => {
                res.write(page);
                res.end();
            })
            break;

        case '/aktuelles/mehr-informationen':
            res.writeHead(200, {
                'Content-type': 'text/html'
            })
            fs.readFile('./views/aktuelles-details.html', (err, page) => {
                res.write(page);
                res.end();
            })
            break;

        case '/referenzen':
            res.writeHead(200, {
                'Content-type': 'text/html'
            });
            fs.readFile('./views/referenzen.html', (err, page) => {
                res.write(page);
                res.end();
            });
            break;

        case '/kontakt':
            res.writeHead(200, {
                'Content-type': 'text/html'
            });
            fs.readFile('./views/kontakt.html', (err, page) => {
                res.write(page);
                res.end();
            });
            break;

        case '/public/style.css':
            res.writeHead(200, {
                'Content-type': 'text/css'
            })
            fs.readFile('./public/style.css', (err, css) => {
                res.write(css);
                res.end();
            })
            break;

        case '/js/activePage.js':
            res.writeHead(200, {
                'Content-type': 'text/javascript'
            })
            fs.readFile('./js/activePage.js', (err, js) => {
                res.write(js);
                res.end();
            })
            break;

        case '/public/karin.jpg':
            res.writeHead(200, {
                'Content-Type': 'image/jpg'
            });
            const karinPortrait = fs.createReadStream('./public/karin.jpg');
            karinPortrait.on('data', (image) => {
                res.write(image);
            });
            karinPortrait.on('end', () => {
                res.end();
            });
            break;

        case '/public/krassimir.jpg':
            res.writeHead(200, {
                'Content-Type': 'image/jpg'
            });
            const krassyPortrait = fs.createReadStream('./public/krassimir.jpg');
            krassyPortrait.on('data', (image) => {
                res.write(image);
            });
            krassyPortrait.on('end', () => {
                res.end();
            });
            break;

        case '/public/logo.png':
            res.writeHead(200, {
                'Content-Type': 'image/png'
            });
            const logo = fs.createReadStream('./public/logo.png');
            logo.on('data', (image) => {
                res.write(image);
            });
            logo.on('end', () => {
                res.end();
            });
            break;

        case '/public/logo2.png':
            res.writeHead(200, {
                'Content-type': 'image/png'
            });
            const logo2 = fs.createReadStream('./public/logo2.png');
            logo2.on('data', (image) => {
                res.write(image);
            });
            logo2.on('end', () => {
                res.end();
            });
            break;

        case '/public/404.png':
            res.writeHead(200, {
                'Content-Type': 'image/png'
            });
            const error = fs.createReadStream('./public/404.png');
            error.on('data', (image) => {
                res.write(image);
            });
            error.on('end', () => {
                res.end();
            });
            break;

        default:
            res.writeHead(200, {
                'Content-type': 'text/html'
            });
            fs.readFile('./views/404.html', (err, page) => {
                res.write(page);
                res.end();
            });
            break;
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
    