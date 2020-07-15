const glob = require('glob-all')
describe('Chenking generated js file', () => {
    it('should generate js file', done => {
        const files = glob.sync([
            './dist/js/index_*.js',
            './dist/js/search_*.js'
        ])
        if (files.length > 0) {
            done()
        } else {
            throw new Error('no js')
        }
    })
})