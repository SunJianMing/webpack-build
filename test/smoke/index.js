const path = require('path')
const webpack = require('webpack')
const rimraf = require('rimraf')
const Mocha = require('mocha')

const mocha = new Mocha({
    timeout:'10000s'
})

process.chdir(path.join(__dirname,'./template'))


rimraf('./dist', () => {
    const prodConfig = require('../../lib/webpack.prod')
    webpack(prodConfig, (err, stats) => {
        if (err) {
            console.error(err)
            process.exit(2)
        }
        console.log(stats.toString({
            colors: true,
            modules: false,
            children:false
        }))
        console.log('start test')
        mocha.addFile(path.join(__dirname,'html-test.js'))
        mocha.addFile(path.join(__dirname,'css-test.js'))
        mocha.addFile(path.join(__dirname,'js-test.js'))
        mocha.run()
    })
})