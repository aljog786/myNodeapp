const http = require('http');
const fs = require('fs');
// The readFileSync method from fs reads the content of each file and returns it.
// We store the content in a variable for each page.
const homePage = fs.readFileSync('index.html')
const aboutPage = fs.readFileSync('abt.html')
// const contactPage = fs.readFileSync('contact.html')
const notFoundPage = fs.readFileSync('nfound.html')

const server = http.createServer((req, res) =>{
if(req.url === '/about')
res.end('The about page')
// else if(req.url === '/contact')
// res.end('The contact page')
else if(req.url === '/')
res.end('The home page')
else {
res.writeHead(404)
res.end('page not found')
}
})
server.listen(3000);