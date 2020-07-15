
if (typeof window === 'undefined') {
    window = {}
}
const fs = require('fs')
const path = require('path')
const express = require('express')
const {renderToString} = require('react-dom/server')
const SSR = require('../dist/js/search-server')
const template = fs.readFileSync(path.join(__dirname,'../dist/search.html'),'utf-8')


function server(port) {
    const app = express()
    app.use(express.static('dist'))
    app.get('/search', (req, res) => {
        const html = renderTemp(renderToString(SSR))
        res.status(200).send(html)
    })
    app.listen(port, () => {
        console.log('run server',port)
    })
}
function renderTemp(str) {
    return template.replace('<!--HTML_PLACERENDER-->',str)
}

server(process.env.PORT||3000)