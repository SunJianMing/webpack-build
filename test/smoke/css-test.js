const glob = require('glob-all')
describe('Chenking generated css', () => {
    it('should generate css file', done => {
        const files = glob.sync([
            './dist/css/index_*.css',
            './dist/css/search_*.css'
        ])
        if (files.length > 0) {
            done()
        } else {
            throw new Error('no css')
        }
    })
})